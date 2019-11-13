import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarCustom = () => {
	return (
		<Navbar className="navbar" expand="lg">
			<Navbar.Brand style={{ color: '#fff' }} className="ml-5" href="#home">
				Tracker
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto pr-4">
					<Nav.Link style={{ color: '#fff' }} href="#home">
						<Link style={{ color: '#fff' }}>Category</Link>
					</Nav.Link>
					<Nav.Link href="#link">
						<Link style={{ color: '#fff' }} to="signin">
							Sign In
						</Link>
					</Nav.Link>
					<Nav.Link href="#link">
						<Link style={{ color: '#fff' }} to="/">
							Register
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarCustom;
