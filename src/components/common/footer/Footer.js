import React from 'react';
import './footer.css';
import { Button } from 'react-bootstrap';

class Footer extends React.Component {
	render() {
		return (
			<footer className="container-fluid f-container">
				<div>
					<p>NDDC TRACKER</p>
					<p className="">© NDDC Tracker 2019</p>
				</div>

				<div>
					<p>About</p>
					<p>Projects</p>
					<p>Contacts</p>
					<p>Terms &amp; Conditions</p>
				</div>

				<div>
					<p>#24 Lorem Street, PH</p>
					<p>+234(0)8020020000</p>
					<p>help@nddcprojecttracker.com</p>
				</div>

				<div className="s-div">
					<input placeholder="suscribe to news letter" />
					<Button>Subscribe</Button>
				</div>
				<div className="mx-3">
					<p style={{ fontSize: '25px' }}>
						<i className="fab mx-1 fa-facebook" />
						<i className="fab mx-1 fa-twitter" />
						<i className="fab mx-1 fa-linkedin" />
						<i className="fab mx-1 fa-instagram" />
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
