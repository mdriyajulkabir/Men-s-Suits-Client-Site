import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const {contexts} = useAuth();
    return (
        <>
            <Navbar bg="secondary gradient" className='sticky-top' variant="dark" collapseOnSelect expand="lg ">
            <Container>
                <Navbar.Brand href="#home">Men's Suits </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className=' justify-text-end fw-normal'>
                <Nav className="me-auto">
                <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/home'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/ourservices'>Explore</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/contactus'>Contact Us</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/aboutus'>About Us</Link> 
                </Nav.Link>
                {
                    contexts.user.email && <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/dashboard'>Dashboard</Link> 
                </Nav.Link>
                }
                
                {
                    contexts.user.email ?<Nav.Link style={{color:'black', textDecoration:'none'}} onClick={contexts.logOut}>Sign Out
                     </Nav.Link>:<Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/signup'>Register</Link> 
                </Nav.Link>}
                {
                    contexts.user.email && <Nav.Link style={{color:'black', textDecoration:'none'}}>{contexts.user.displayName}</Nav.Link>
                }
                
                
               
                </Nav>
                </Navbar.Collapse>

                
            </Container>
            </Navbar>
            
        </>
    );
};

export default Header;