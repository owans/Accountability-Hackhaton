import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/footer/Footer';
import Navbar from '../common/Navbar';
import imgf from '../../assets/flogo2.png';
import imgG from '../../assets/gLogo.png';

const SignIn = () => {
	const handleSocialClick = (name) => {
		if (name === 'google') {
			window.location.href = 'http://localhost:5000/api/v1/auth/google';
		}
	};
	return (
		<div>
			<Navbar />
			<div className="mt-5">
				<div className="signup-container">
					<h3 className="mt-5 mb-5 text-center">Sign in to read and Write Feedback</h3>
					<div onClick={() => handleSocialClick('facebook')} className="social-btn mb-3">
						<img src={imgf} style={{ width: '60px', height: '60px' }} alt="facebook" />
						<p className="social-txt"> Continue with Facebook </p>
					</div>
					<div onClick={() => handleSocialClick('google')} className="social-btn mb-3">
						<img src={imgG} style={{ width: '60px', height: '60px', padding: '10px' }} alt="google" />
						<p className="social-txt mr-5">Continue with Google</p>
					</div>
					<Link to="/signup-mail">
						<p className="mt-3">Continue With Email</p>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SignIn;
