import AWS from 'aws-sdk'
import dotenv from 'dotenv';
dotenv.config();

const SES_CONFIG = {
   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
   region: process.env.AWS_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let sendEmail = async (recipientEmail, name) => {
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
               Data: 'This is the body of my email!',
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

let sendTemplateEmail = (recipientEmail) => {
   let params = {
      Source: 'kingsleyyong0208@gmail.com',
      Template: '<name of your template>',
      Destination: {
         ToAddresse: [ 
           recipientEmail
         ]
      },
      TemplateData: '{ \"name\':\'John Doe\'}'
   };
   return AWS_SES.sendTemplatedEmail(params).promise();
};

export default {
  sendEmail,
  sendTemplateEmail,
};