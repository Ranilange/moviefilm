import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./appbar.css"
export default function ButtonAppBar() {
    return (
        <Box className='rer' sx={{ flexGrow: 1 }}>
            <AppBar className='container' position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        🎦
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ADD YOUR MOVIES: TITLE,IMG AND TRAILER
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
