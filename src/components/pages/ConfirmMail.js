import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import querySearch from 'query-string';
import Navbar from '../common/Navbar';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import imgf from '../../assets/flogo2.png';
import imgG from '../../assets/gLogo.png';

const SignUpWithEmail = ({ location, history }) => {
	const [ email, setEmail ] = useState('');
	const [ code, setCode ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');
	const [ show, setShow ] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const payload = { code, password };
			console.log(payload);
			const res = await axios.post('/api/v1/user/verify', payload);
			if (res.status === 200) {
				history.push(`/dashboard?token=${res.data.data.token}`);
			}
		} catch (error) {
			setError('Verification Failed, or Email already used');
			setShow(true);
		}
	};
	useEffect(
		() => {
			const { email } = querySearch.parse(location.search);
			if (!email) {
				history.push('/signup-mail');
			}
			setEmail(email);
		},
		//eslint-disable-next-line
		[],
	);
	console.log(error);
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
					<p style={{ fontSize: '15px' }}>Please type in the code we just sent to your email {email} Edit email</p>
					{show ? (
						<Alert style={{ width: '60%' }} variant="danger" onClose={() => setShow(false)} dismissible>
							{error ? error : 'Request Successful'}
						</Alert>
					) : null}
					<Form onSubmit={handleSubmit} className="form">
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Verify Email</Form.Label>
							<Form.Control
								type="text"
								name="code"
								onChange={(e) => setCode(e.target.value)}
								value={code}
								placeholder="Enter Your Verification Code"
								required
							/>
							<Form.Label className="mt-4">Choose Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								placeholder="Choose a password"
								required
							/>
						</Form.Group>
						<Button type="submit" className="with-email mb-5">
							Continue With Email
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default SignUpWithEmail;
