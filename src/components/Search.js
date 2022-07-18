import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, IconButton } from '@mui/material';
import Box from '@mui/material/Box';

const Search = ({ token, posts, setpostShown }) => {
   const [searchTerm, setSearchTerm] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      const filterPost =
         posts.length && posts.filter((post) => postMatches(post, searchTerm));
      const postShown = searchTerm.length ? filterPost : posts;
      setpostShown(postShown);
   };

   function postMatches(post, text) {
      if (post.title.includes(searchTerm)) {
         return true;
      }
      if (post.description.includes(searchTerm)) {
         return true;
      }
      if (post.location.includes(searchTerm)) {
         return true;
      }
      if (post.price.includes(searchTerm)) {
         return true;
      } else {
         return false;
      }
   }

   return (
      <>
         <Box
            sx={{
               position: 'relative',
               borderRadius: '10px',
               mr: '2',
               ml: '0',
            }}>
            <InputBase
               onSubmit={handleSubmit}
               variant='outlined'
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               placeholder='Search'
               aria-label='search'></InputBase>
            <IconButton aria-label='search' onClick={handleSubmit}>
               {' '}
               <SearchIcon />{' '}
            </IconButton>
         </Box>
      </>
   );
};

export default Search;
