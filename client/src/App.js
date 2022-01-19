import { Alert, FormControlLabel, Card, TextField, Button, Box, Checkbox } from '@mui/material'
import { useRef, useState } from 'react'
import postRequest from './api';

function App() {

  const [dailyNews, setDailyNews] = useState(true);
  const [accNotification, setAccNotification] = useState(true);
  // const [status, setStatus] = useState(null);
  

  let email = useRef(), name = useRef();

  const handleSubscribeButton = () => {
    postRequest(email.current.value, name.current.value, dailyNews, accNotification)
    
  }

  // let alertBar = (status) => {
  //   if (status === true)
  //     return <Alert severity="success">Success</Alert>;
  //   else if (status === false)
  //     return <Alert severity="error">This is an error alert — check it out!</Alert>;
  //   else
  //     return null;
  // }

  return (
    <div style={{ 
      margin: '-1vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      {/* {alertBar(status)} */}

      <Card style={{
        textAlign: 'center',
        backgroundColor: 'lightblue',
        width: '50vw',
        padding: '1.6vw'
      }}>
        <h1 style={{fontSize: '2.5vw'}}>Enter your email to subscribe us!</h1>
        <Box
          component="form"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <TextField
            sx={{m: '1vw', width: '35vw'}}
            required
            id='email'
            inputRef={email}
            label='Email'
          />

          <TextField
            sx={{m: '1vw', width: '35vw'}}
            required
            id='name'
            inputRef={name}
            label='Name'
          />

          
          <FormControlLabel
            control={
              <Checkbox
                checked={dailyNews}
                onChange={() => {
                  setDailyNews(!dailyNews)
                }}
              />
            }
            label="Daily News"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={accNotification}
                onChange={() => {
                  setAccNotification(!accNotification)
                }}
              />
            }
            label="Account Notifications"
          />

          <Button
            variant="outlined"
            sx={{ m: '1vw', width: '35vw' }}
            onClick={()=>{handleSubscribeButton()}}
          >
            Subscribe
          </Button>

        </Box>
      </Card>
    </div>
  );
}

export default App;
