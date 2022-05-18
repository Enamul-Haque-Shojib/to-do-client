import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../firebase.init';
import CustomLink from './CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    

    const [user]=useAuthState(auth); 
    const handleSignOut = () => {
        signOut(auth)
        
            Navigate('/');
        
    }


    return (
        <div>
         <Navbar bg="black" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold fs-3' to="/">ElectroMate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-link">
                        <CustomLink to="/">Home</CustomLink>

                        
                        {
                            user && <>
                            <CustomLink to="/manageitems">Manage Items</CustomLink>
                        <CustomLink to="/additems">Add Items</CustomLink>
                        <CustomLink to="/myitems">My Items</CustomLink>
                            </>
                            
                        }
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        
                        {
                            user ? <button className='singout-btn' onClick={handleSignOut}>Sign Out</button>
                            :
                            <CustomLink to="/login">Login</CustomLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;