import { TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { APIURL } from '../index';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Message = ({ token, postId }) => {
   const [content, setContent] = useState('');
   const [message, setMessage] = useState([]);
   const [title, setTitle] = useState('');
   const history = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`${APIURL}/posts/${postId}/messages`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer${token}`,
         },
         body: JSON.stringify({
            message: content,
         }),
      });
      const result = await response.json();
      setMessage([result.data.message, ...message]);
      setContent('');
      history('/Inbox');
   };

   return (
      <Box component='form' onSubmit={handleSubmit}>
         <TextField
            margin='normal'
            fullWidth
            id='outlined'
            label='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}></TextField>
         <TextField
            margin='normal'
            fullWidth
            id='outlined'
            label='Message'
            value={content}
            onChange={(e) => setContent(e.target.value)}></TextField>
         <Button
            variant='contained'
            type='submit'
            margin='normal'
            aria-label='send'
            endIcon={<SendIcon />}>
            Send
         </Button>
      </Box>
   );
};

export default Message;
