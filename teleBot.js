exports.tele = () => {
const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const TelegramBot = require('node-telegram-bot-api');

const token = '575939642:AAHdrW-lOZ2gOXzsHxAjtHOaf3oSjog4SrM';
const bot = new TelegramBot(token, {polling: true});


mongoose.connect('mongodb://localhost/VKparser');
  let db = mongoose.connection;
  db.on('error', ()=>{console.log('connection error')});
  db.on('open', () => {
    console.log('succes connection');
  });

const Schema = mongoose.Schema
let group = new Schema({
  link: String,
  last: String
})

let Group =  mongoose.model('Group', group);


let words = ['справк', 'вопрос'];
let admins = [270065747];



async function start (words, Group) {
  let groups = [];
  await Group.find({}, async function(err, res) {
    if (!err){
      groups = res;
      await console.log('Succes groups!');
    }
  })
  for (let j = 0; j < groups.length; j++) {
  request(groups[j].link, async function (error, response, body) {
    let $ = cheerio.load(body);
    let length = $('.pi_text').length;

    for (let i = 0; i < length; i++) {
      console.log(i);
      let id = $('.post__anchor').first().attr('name');
      let post = $('.pi_text').first().text().toLowerCase();

      if (id == groups[j].last) break;
      console.log(id);
      console.log(groups[j].last);
      if (i == 0) {
        await Group.findOne({'link': groups[j].link}, async function(err, res) {
          if (!err) {
                res.set({last: id });
                await res.save(async ()=>{
                  await console.log('Succes last writing');
                })
          }
        })
      }


      words.forEach((word, i ) => {
        if (post.indexOf(word) !== -1) {
          admins.forEach((admin)=>{bot.sendMessage(admin, post +' \n' + groups[j].link )})
        }
      });

      $('.pi_text').first().remove();
      $('.post__anchor').first().remove();
    }

  });
  }
}

bot.on('message', async (msg) => {
  if (msg.text.toString() == 'reset') {
    Group.remove({}, function(err) {
      bot.sendMessage(msg.chat.id, 'removed');
     console.log('collection removed')
    });
  } else if (msg.text.toString().toLowerCase().indexOf('add') == 0) {
    Group.create({link: msg.text.toString().slice(4), last: ''}, function(err) {
     console.log('collection add');
     console.log(msg.text.toString().slice(4));
     bot.sendMessage(msg.chat.id, 'succes add');
    });
  } else if (msg.text.toString().toLowerCase().indexOf('list') == 0) {
    Group.find({}, async function(err, res) {
      if (!err){
        groups = res;
        await console.log(res);
      }
    })
  } else if (msg.text.toString().toLowerCase().indexOf('myChatId') == 0) {
      bot.sendMessage(msg.chat.id, msg.chat.id);
        await console.log(msg.chat.id);

  }
})

start(words, Group);
setInterval(()=> start(words, Group), 30000);
}
