import * as React from 'react';
import { useState, useEffect } from 'react';
import { APIURL } from '../index';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Inbox = ({ token, posts, username }) => {
   const [myMessage, setMyMessage] = useState([]);

   useEffect(() => {
      const fecthMeg = async () => {
         const response = await fetch(`${APIURL}/users/me`, {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer${token}`,
            },
         });
         const result = await response.json();
         setMyMessage(result.data.messages);
      };
      fecthMeg();
   }, [token]);
   return (
      <>
         <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {myMessage.map((message) => (
               <Grid item xs={12} md={6} sm={4}>
                  <Card
                     variant='outlined'
                     sx={{
                        display: 'flex',
                        backgroundColor: 'aliceblue',
                        boxShadow: '5px 5px grey',
                     }}>
                     <CardContent sx={{ flex: 1 }} key={message._id}>
                        <Typography component='h2' variant='h5' id='Sender'>
                           Sender:{message.fromUser.username}
                        </Typography>
                        <Typography variant='subtitle1'>
                           Title:{message.post.title}
                        </Typography>
                        <Typography variant='subtitle2'>
                           Message:{message.content}
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </>
      // <IconButton aria-label='message' size='small'>
      //    <MessageIcon />
      // </IconButton>
   );
};

export default Inbox;
