import express from 'express';
// import AWS from 'aws-sdk';
import EmailUsage from './emailUsage.js'
import dotenv from 'dotenv';
dotenv.config()

const app = express();

app.get('/', (req, res) => {
   const name = req.query.name, recipientEmail = req.query.rEmail;

   console.log("Name = " + name);
   console.log("Recipient Email = " + recipientEmail);

   EmailUsage.sendEmail(recipientEmail, name);

});

app.listen(3000, () => console.log('SMS Service Listening on PORT 3000'));