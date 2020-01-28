import React, { useEffect } from 'react';
import Footer from '../common/footer/Footer';
import Navbar from '../common/Navbar';
import queryString from 'query-string';
import projectImage2 from '../../assets/card2.png';
import ProjectCard from '../common/ProjectCard';
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
			<div className="project-container mb-5">
				<h4 className="mt-5">Saved Projects</h4>
				<ProjectCard projectImage={projectImage2} />
				<ProjectCard projectImage={projectImage2} />
				<ProjectCard projectImage={projectImage} />
				<ProjectCard projectImage={projectImage} />
			</div>
			<Footer />
		</div>
	);
};

export default SavedProject;