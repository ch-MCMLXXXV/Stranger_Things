import * as React from 'react';
import { useState } from 'react';
import { APIURL } from '../index';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { ThemeContext } from '@emotion/react';
import Box from '@mui/material/Box';

const Search = ({ token, posts, setPosts }) => {
   const [searchTerm, setSearchTerm] = useState('');

   return (
      <>
         <Box
            sx={{
               position: 'relative',
               borderRadius: '10px',
               mr: '2',
               ml: '0',
            }}>
            <SearchIcon />
            <InputBase
               variant='outlined'
               placeholder='Search'
               aria-label='search'></InputBase>
         </Box>
      </>
   );
};

export default Search;
