import express from 'express';
// import AWS from 'aws-sdk';
import EmailUsage from './Email/emailUsage.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyparser from 'body-parser';
import dataAddingFirestore from './Database/dbseed.js';

dotenv.config()
const app = express();
app.use(cors())
const port = 8000; 
app.use(bodyparser.json({ limit: '50mb' }));

// app.get('/', async (req, res) => {
//    // const name = req.query.name, recipientEmail = req.query.rEmail;

//    // console.log("Name = " + name);
//    // console.log("Recipient Email = " + recipientEmail);

//    // EmailUsage.sendEmail(recipientEmail, name);

//    try {
//       console.log(req.body)
//       res.status(200).json(req.body)

//    } catch (error) {
//       res.status(404).json({ message: error.message });
//    }
// });

app.post('/', async (req, res) => {
   try {
      const data = req.body;
      dataAddingFirestore(data);
      EmailUsage.welcomeEmail(data.email, data.name);
   } catch (error) {
      console.log(error)
   }
});

app.listen(port, () => console.log(`Server Running on PORT ${port}`));