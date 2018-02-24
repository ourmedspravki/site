const ReactDom = require('react-dom/server');
const fs = require('fs');
const koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');
require('babel-core/register');
const bodyParser = require('koa-bodyparser');
const body = require('async-busboy');
const city = require('./city.json');
let gorodd = "";
const Email = require(__dirname + '/src/models/Email');

const renderHTML = require(__dirname + '/views/index.js');
const app = new koa();

app.use(router.routes());
app.use(serve(__dirname + '/public'));
app.use(bodyParser());

router.get('/', async (ctx)=>{
    gorodd = "";
    ctx.body = await renderHTML(gorodd);
});
router.get('/:city', async (ctx)=>{
    gorodd = city[ctx.params.city];
    if (gorodd !== undefined) {
        ctx.body = await renderHTML(gorodd);
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

app.listen(8080, ()=>{
    console.log('Стартануло')
});