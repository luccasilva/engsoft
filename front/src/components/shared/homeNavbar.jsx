import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

export default (props) => {
    return (
        <div className='fixed-top'>
            <div className='navbarbar'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/"><img src={logo} alt="" className="logonav" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link bg='orange'><Link to="/cliente">Cliente</Link></Nav.Link>
                                <Nav.Link href=""><Link to="/profissional">Profissional</Link></Nav.Link>
                                <Nav.Link href=""><Link to="/profissoes">Página de Profissões</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}