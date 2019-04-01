const express=require('express')
const app =express()
const a=10
var nodemailer = require('nodemailer');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')
var transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
      user: 'uwaish@yandex.com',
      pass: 'uwaish55@#'
    }
  });
  
  var mailOptions = {
    from: 'uwaish@yandex.com',
    to: 'uwaishkhan55@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
app.get('/',(req,res)=>
{
    res.render('index')
})
app.post('/sms',(req,res)=>
{
    console.log(req.body.NUMBER)
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
    res.redirect('/')
})

app.listen(9999)