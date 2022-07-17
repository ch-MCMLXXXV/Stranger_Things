import * as React from 'react';
import { APIURL } from '../index';
import MessageIcon from '@mui/icons-material/Message';
import { IconButton } from '@mui/material';

const Inbox = () => {
   return (
      <IconButton aria-label='message' size='small'>
         <MessageIcon />
      </IconButton>
   );
};

export default Inbox;
