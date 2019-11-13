import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import { Form, Button, Row, Col } from 'react-bootstrap';
import imgf from '../../assets/flogo2.png';
import imgG from '../../assets/gLogo.png';

class SignUpWithEmail extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col>
						<Navbar />
					</Col>
				</Row>
				<div className="mt-5">
					<div className="signup-container">
						<h3 className="mt-5 mb-5 text-center">Sign up to read and write feedback</h3>
						<div className="social-btn mb-3">
							<img src={imgf} style={{ width: '60px', height: '60px' }} alt="facebook" />
							<p className="social-txt"> Continue with Facebook </p>
						</div>

						<div className="social-btn mb-3">
							<img src={imgG} style={{ width: '60px', height: '60px', padding: '10px' }} alt="google" />
							<p className="social-txt mr-5">Continue with Google</p>
						</div>

						<Link to="/continueWithEmail">
							<p className="mt-3">Continue With Email</p>
						</Link>
						<p style={{ fontSize: '15px' }}>
							Please type in the code we just sent to your email richardtamunotonye@gmail.com Edit email
						</p>
						<Form className="form">
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Verify Email</Form.Label>
								<Form.Control type="email" placeholder="Enter Your Verification Code" />
							</Form.Group>
							<Button className="with-email">Continue With Email</Button>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpWithEmail;
