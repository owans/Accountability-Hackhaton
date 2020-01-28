import React from 'react';
import { Image } from 'react-bootstrap';

const ProjectCard = ({ projectImage, project }) => {
    console.log(project);
	return (
		<div className="card-p mb-4">
			<div>
				<Image src={projectImage} rounded />
			</div>
			<div className="right-card p-4">
				<div>
                  <h4>{(project && project.title ? project.title :'Etche Bridge Contruction')}</h4>
					<h6>
						Name of Contractor: <span style={{ color: '#54D0ED' }}>Belmerg NG LTD</span>{' '}
					</h6>
					<p>
						Activity Status{' '}
						<span style={{ background: '#0B273D', color: '#fff', padding: '2px 6px', borderRadius: '6px' }}>
							Work in progress
						</span>
					</p>
				</div>
				<div className="mb-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio magni mollitia velit officia
					illum, dolorem necessitatibus, voluptatum possimus nostrum reiciendis, aliquam inventore veniam saepe aut
					molestias laborum culpa deserunt. Incidunt aperiam quaerat delectus nihil voluptate impedit possimus quas
					voluptatum?
				</div>
				<div className="extra">
					<div>
						<p>
							Project ID: <span style={{ color: '#54D0ED' }}>0009000</span>
						</p>
						<p>
							Project Date: <span style={{ color: '#54D0ED' }}>20th Nov, 2019</span>
						</p>
					</div>
					<div>
						<p>
							Total Budget: <span style={{ color: '#54D0ED' }}>#0009889</span>
						</p>
						<p>
							Location: <span style={{ color: '#54D0ED' }}>Bayalsa</span>
						</p>
					</div>
				</div>
				<p style={{ color: '#707070' }}>
					<span>
						<i className="fa mx-1 fa-thumbs-up" /> 200
					</span>
					<span className="mx-4">
						<i className="fa fa-thumbs-down" /> 4
					</span>
					<span className="mx-4">
						<i className="fa fa-comment-dots" /> 40
					</span>
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;