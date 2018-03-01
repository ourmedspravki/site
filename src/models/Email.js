import nodemailer from 'nodemailer';
import dateformate from 'dateformat';
let smtpTransport = require('nodemailer-smtp-transport');
let fs = require('fs');
let counter = 0;
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'medspravki.vsem@gmail.com',
        pass: 'forspravka1'
    }
}));

let mailOptions =  (data)=> {

    let now = new Date();
    let nowform = dateformate(now, "dd.mm.yy HH:MM");

    return {
    from: 'medspravki.vsem@gmail.com',
    to: 'medspravki.vsem@gmail.com',
    subject: `Заказ от ${nowform}`,
    text: `
    Имя: ${data.fields.name} \n
    Телефон: ${data.fields.tel}\n
    Связаться по ${data.fields.type}\n
    Город: ${data.fields.city}`
    }
};

module.exports = (data) => transporter.sendMail(mailOptions(data), function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);

    }
});
