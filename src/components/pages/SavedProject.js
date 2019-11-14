import React, { useEffect } from 'react';
import Footer from '../common/footer/Footer';
import Navbar from '../common/Navbar';
import queryString from 'query-string';
import { Image } from 'react-bootstrap';
import projectImage from '../../assets/card3.png';

const SavedProject = ({ location, history }) => {
	useEffect(
		() => {
			const query = queryString.parse(location.search);
			if (query.token) {
				window.localStorage.setItem('jwtToken', query.token);
			} else {
				history.push('/signin');
			}
		},
		// eslint-disable-next-line
		[],
	);
	return (
		<div>
			<Navbar />
			<div className="dash-header">
				<div className="dash-item">
					<p style={{ fontSize: '50px', color: '#707070' }} className="fa fa-user-circle" />
					<h6 className="pl-3">
						John Doe<br /> <small>Port Harcourt</small>
					</h6>
				</div>
				<div class="dash-item">
					<h6 className="pl-3">
						1<br /> <small>Saved Project(s)</small>
					</h6>
					<h6 className="pl-3">
						3<br /> <small>Share</small>
					</h6>
				</div>
			</div>
			<div className="project-container">
				<h4 className="mt-5">Saved Projects</h4>
				<div className="card-p">
					<div>
						<Image src={projectImage} rounded />
					</div>
					<div className="right-card">
						<div>
							<h4>Etche Bridge Contruction</h4>
							<h6>Name of Contractor</h6>
							<p>Activity Status</p>
						</div>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio magni mollitia velit officia
							illum, dolorem necessitatibus, voluptatum possimus nostrum reiciendis, aliquam inventore veniam saepe aut
							molestias laborum culpa deserunt. Incidunt aperiam quaerat delectus nihil voluptate impedit possimus quas
							voluptatum?
						</div>
						<div className="extra">
							<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eum.</div>
							<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SavedProject;
