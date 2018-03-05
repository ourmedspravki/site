const ReactDom = require('react-dom/server');
const fs = require('fs');
const xml2js = require('xml2js');
const koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');
require('babel-core/register');
const bodyParser = require('koa-bodyparser');
const body = require('async-busboy');
const city = require('./city.json');
let gorodd = "";
const Email = require(__dirname + '/src/models/Email');
const referal = require(__dirname + '/src/models/referal');
const renderHTML = require(__dirname + '/views/index.js');
const renderAdmin = require(__dirname + '/views/admin.js');
const app = new koa();
let parser = new xml2js.Parser();
let sitemap = '';
let robots = '';
let favicon = '';
fs.readFile('./public/sitemap.xml', (err, data)=>{
    if(err){
    console.log(err)
    }
    parser.parseString(data, (err, result)=>{
    if(err){
    console.log(err)
    }
        sitemap = result;
    })
});
fs.readFile('./public/robots.txt', (err, data)=>{
    robots = data;
});
fs.readFile('./public/favicon.ico', (err, data)=>{
    favicon = data;
});

app.use(router.routes());
app.use(serve(__dirname + '/public'));
app.use(bodyParser());

router.get('/', async (ctx)=>{
    gorodd = "";
    ctx.body = await renderHTML(gorodd);
});

router.get('/admin', async (ctx)=>{
    ctx.body = await renderAdmin();
});

router.get('/sitemap.xml', async (ctx)=>{
    ctx.set('Content-Type', 'application/xml');
    ctx.type = 'application/xml';
    ctx.body = sitemap;
});

router.get('/robots.txt', async (ctx)=>{
    ctx.set('Content-Type', 'text/plain');
    ctx.type = 'text/plain';
    ctx.body = robots;
});

router.get('/:city', async (ctx)=>{
    gorodd = city[ctx.params.city];
    if (gorodd !== undefined) {
        ctx.body = await renderHTML(gorodd);
    } else  if (ctx.params.city.indexOf('favicon') > -1){
        ctx.set('Content-Type', 'image/x-icon');
        ctx.type = 'image/x-icon';
        ctx.body = favicon;
    } else {
        ctx.status = 404;
        ctx.body = "<h1>Not found</h1>"
    }

});
router.post('/', async (ctx)=>{
    const data = await body(ctx.req);
    Email(data);
    ctx.body = 'ok';
});

router.post('/indefication', async (ctx)=>{
    const data = await body(ctx.req);
    console.log(data.fields.pass);
    if (data.fields.pass === "123qwe456rty"){
        ctx.body = "ok";
    } else {
        ctx.body = "e"
    }
});

router.post('/getitem', async (ctx)=>{
    const data = await body(ctx.req);
    let re = referal.getItem(data.fields.name);
    ctx.body = re;
});

router.post('/setitem', async (ctx)=>{
    const data = await body(ctx.req);
    referal.setItem(data.fields.name);
    ctx.body = 'ok';
});

router.post('/updateitem', async (ctx)=>{
    const data = await body(ctx.req);
    referal.updateItem(data.fields.name);
    ctx.body = 'ok';
});

app.listen(80, ()=>{
    console.log('Стартануло')
});
