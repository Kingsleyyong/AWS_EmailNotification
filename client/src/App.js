import { Box, Card, TextField, Button } from '@mui/material'
import { useRef } from 'react'

function App() {

  let email = useRef(), name = useRef();

  const handleSubscribeButton = () => {
      console.log(email.current.value, name.current.value)
  }

  return (
    <div style={{ 
      margin: '-1vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
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
