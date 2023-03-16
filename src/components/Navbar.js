import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Link to="/">Code for interview</Link>
                    <Link to="/allusers">All Users</Link>
                    <Link to="/login" className='ms-auto'>Login</Link>
                    <Link to="/register">Register</Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
