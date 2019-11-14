import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarCustom = () => {
	return (
		<Navbar className="navbar" expand="lg">
			<Navbar.Brand style={{ color: '#fff' }} className="ml-5">
				<Link style={{ color: '#fff' }} to="/">
					Tracker
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />

			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto pr-4">
					<Link style={{ color: '#fff' }} to="/" className="nav-link">
						Category
					</Link>
					<Link className="nav-link" style={{ color: '#fff' }} to="signin">
						Sign In
					</Link>
					<Link className="nav-link" style={{ color: '#fff' }} to="/signup-mail">
						Register
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarCustom;
