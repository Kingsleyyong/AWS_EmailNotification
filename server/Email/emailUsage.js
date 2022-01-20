import AWS from 'aws-sdk'
import dotenv from 'dotenv';
dotenv.config();

const SES_CONFIG = {
   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
   region: process.env.AWS_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let welcomeEmail = async (recipientEmail, name) => {
   let params = {
      Source: 'kingsleyyong0208@gmail.com',
      Destination: {
         ToAddresses: [
            recipientEmail
         ],
      },
      ReplyToAddresses: [],
      Message: {
         Body: {
            Html: {
               Charset: 'UTF-8',
               Data: 'Hello! Thank you for the subscription.',
            },
         },
         Subject: {
            Charset: 'UTF-8',
            Data: `Hello, ${name}!`,
         }
      },
   };
   try {
      const { MessageId } = await AWS_SES.sendEmail(params).promise();
      console.log(`Your message with id ${ MessageId } has been delivered.`)
   } catch (e) {
      console.log(e)
   }
   
};

let dailyNewsEmail = async (recipientEmail, name) => {
   let params = {
      Source: 'kingsleyyong0208@gmail.com',
      Template: `Today's News`,
      Destination: {
         ToAddresses: [ 
           recipientEmail
         ]
      },
      TemplateData: `name: ${name}, This is daily news email!`
   };

   try {
      const { MessageId } = await AWS_SES.sendTemplatedEmail(params).promise();
      console.log(`Your message with id ${ MessageId } has been delivered.`)
   } catch (e) {
      console.log(e)
   }
};

let accNotificationEmail = async (recipientEmail, name) => {
   let params = {
      Source: 'kingsleyyong0208@gmail.com',
      Template: `Account Notification`,
      Destination: {
         ToAddresses: [ 
           recipientEmail
         ]
      },
      TemplateData: `name: ${name}, This is your account notification!`
   };

   try {
      const { MessageId } = await AWS_SES.sendTemplatedEmail(params).promise();
      console.log(`Your message with id ${ MessageId } has been delivered.`)
   } catch (e) {
      console.log(e)
   }
};

export default {
   welcomeEmail,
   dailyNewsEmail,
   accNotificationEmail
};