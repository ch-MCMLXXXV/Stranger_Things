import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

const NavBar = ({ token }) => {
   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
               <Toolbar>
                  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                     Stranger's Things
                  </Typography>
                  {!token ? (
                     <>
                        <Button href='/Register' color='inherit'>
                           Register
                        </Button>
                        <Button href='/Login' color='inherit'>
                           Login
                        </Button>
                     </>
                  ) : (
                     <>
                        <Button href='/Homepage' color='inherit'>
                           Home
                        </Button>
                        <Button href='/Userpage' color='inherit'>
                           My Page
                        </Button>
                        <Button href='/Inbox' color='inherit'>
                           Inbox
                        </Button>
                        <Button href='/Logout' color='inherit'>
                           Logout
                        </Button>
                     </>
                  )}
               </Toolbar>
            </AppBar>
         </Box>
         <Typography variant='h2' component='div'>
            Posts
         </Typography>
      </>
   );
};

export default NavBar;
