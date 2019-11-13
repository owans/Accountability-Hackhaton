import React from 'react';
import Navbar from '../common/Navbar';
import { Image } from 'react-bootstrap';
import projectImage from '../../assets/card3.png';
const SavedProject = () => {
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio magni mollitia velit officia
						illum, dolorem necessitatibus, voluptatum possimus nostrum reiciendis, aliquam inventore veniam saepe aut
						molestias laborum culpa deserunt. Incidunt aperiam quaerat delectus nihil voluptate impedit possimus quas
						voluptatum?
					</div>
				</div>
			</div>
		</div>
	);
};

export default SavedProject;
