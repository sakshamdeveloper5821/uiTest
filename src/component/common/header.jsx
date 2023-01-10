import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Men', 'Womens', 'Kids', 'FTW', 'Accessories'];

const Header = () => {

  return (
    <AppBar position="static" color="transparent"
          sx={
            {color: 'black !important'}
        }
    >
        {/* <Container maxWidth="xl"> */}
            <Toolbar
                sx={{
                color: 'black'
            }}
            >
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: 'black', display: 'block', fontSize: 8, padding: 0 }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>

            </Toolbar>
        {/* </Container> */}
    </AppBar>
  );
};
export default Header;
