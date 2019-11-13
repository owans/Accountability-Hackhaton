import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import imgf from '../../assets/flogo2.png';
import imgG from '../../assets/gLogo.png';

const SignIn = () => {
	return (
		<div>
			<Navbar />
			<div className="mt-5">
				<div className="signup-container">
					<h3 className="mt-5 mb-5 text-center">Sign in to read and Write Feedback</h3>
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
				</div>
			</div>
		</div>
	);
};

export default SignIn;
