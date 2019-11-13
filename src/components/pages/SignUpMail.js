import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Navbar from '../common/Navbar';
import imgf from '../../assets/flogo2.png';
import imgG from '../../assets/gLogo.png';

class SignUpWithEmail extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="mt-5">
					<div className="signup-container">
						<h3 className="mt-5 mb-5 text-center">Sign In to read and Write Feedback</h3>
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

						<Form className="form">
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter Your email" />
								<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
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
