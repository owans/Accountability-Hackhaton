import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../common/footer/Footer';
import { Link } from 'react-router-dom';
import { Form, Button, Alert, Col } from 'react-bootstrap';
import Navbar from '../common/Navbar';
import imgf from '../../assets/flogo2.png';
import imgG from '../../assets/gLogo.png';

const SignUpWithEmail = ({ history }) => {
	const [ email, setEmail ] = useState('');
	const [ show, setShow ] = useState(false);
	const [ error, setError ] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const newUser = {
				email,
				name: 'New User',
			};
			const res = await axios.post('/api/v1/user', newUser);
			if (res.status === 201) {
				return history.push(`/signup-mail-confirm?email=${email}`);
			}
			setError('Error Creating account');
			setShow(true);
		} catch (error) {
			setError('Email Already used');
			setShow(true);
			console.log('error');
		}
	};

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

					<Link to="/signup-mail">
						<p className="mt-3">Continue With Email</p>
					</Link>
					{show ? (
						<Alert
							style={{ width: '60%' }}
							variant={error ? 'danger' : 'info'}
							onClose={() => setShow(false)}
							dismissible
						>
							{error ? error : 'Request Successful'}
						</Alert>
					) : null}
					<Form onSubmit={handleSubmit} className="form">
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="Enter Your email"
								required
							/>
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>
						<Button type="submit" className="with-email">
							Continue With Email
						</Button>
					</Form>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default SignUpWithEmail;
