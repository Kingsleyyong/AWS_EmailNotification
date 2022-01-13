import express from 'express';
import AWS from 'aws-sdk';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

// require('dotenv').config();

app.get('/', (req, res) => {
   console.log("Message = " + req.query.message);
   console.log("Subject = " + req.query.subject);

   const sns = new AWS.SNS({
      region: process.env.AWS_REGION
   })

   const params = {
      Subject: req.query.subject,
      Message: req.query.message,
      TopicArn: 'arn:aws:sns:us-east-1:880086282062:MyTopic'
   }

   const publishToSNS = async () => {
   try {
      const { MessageId } = await sns.publish(params).promise()
      console.log(`Your message with id ${ MessageId } has been delivered.`)
   } catch (e) {
      console.log(e)
   }
   }

   publishToSNS();

});

app.listen(3000, () => console.log('SMS Service Listening on PORT 3000'))