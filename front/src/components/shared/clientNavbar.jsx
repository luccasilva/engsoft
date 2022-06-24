import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";
import {Container, Navbar, Nav } from 'react-bootstrap';
import { logout } from '../../services/loginService';

import { MdExitToApp } from "react-icons/md";

export default (props) => {
    return (
        <div className='fixed-top'>
            <div className='navbarbar'>
            <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="" className="logonav"/></Navbar.Brand>
                <span className='sidebartitle'>{props.titulo}</span>
            <Nav className="me-auto">
                <Nav.Link><Link to="/"><MdExitToApp className='iconbar'/></Link></Nav.Link>
            </Nav>
            </Container>
            </Navbar>
        </div> 
    </div> 
    );
}