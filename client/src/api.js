import axios from 'axios';

let postRequest = (email, name, dailyNews, accNotification) => {
   const url = 'http://localhost:8000';

   let data = {
      email: email,
      eame: name,
      subcribeTopics: {
         dailyNews: dailyNews,
         accountNotification: accNotification
      }
   }
   
   axios.post(url, data)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
   
   // return true;
}

export default postRequest;
