import React, { useEffect, useState } from 'react';
import Footer from '../common/footer/Footer';
import axios from 'axios';
import Navbar from '../common/Navbar';
import queryString from 'query-string';
import {Button, Form, Col, Row} from 'react-bootstrap'
import projectImage2 from '../../assets/card2.png';
import ProjectCard from '../common/ProjectCard';
import projectImage from '../../assets/card3.png';

const SavedProject = ({ location, history }) => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState()
    const [search, setSearch] = useState('');
	useEffect(
		() => {

		},
		// eslint-disable-next-line
		[],
    );
    const handleClick = async() => {
        if(search !== '' && filter !== ''){
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/project/search?${filter}=${search}`);
                if(res.status === 200){
                    setProjects(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
    } 
    const handleCheck = (e) => {
        setFilter(e.target.name);
    }
	return (
		<div>
			<Navbar />
			<div style={{background: '#2C5E2E'}} className="dash-header">
				<h3 style={{color: '#fff'}} className="pl-5">Search Result for "Port Harcourt"</h3>
			</div>
            <div className="d-flex justify-content-center mt-4">
            <div className="s-div go-sixty mt-3">
				<input placeholder="Search Project" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
				<Button onClick={handleClick}>Search</Button>
			</div>
            </div>
             <Form>
                <div className="select-container mt-4">
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Check name="state" onChange={handleCheck} className="mr-4" type="checkbox" label="State" />
               </Form.Group>
               <Form.Group controlId="formBasicCheckbox m-2 p-2" >
                   <Form.Check className="mr-4" onChange={handleCheck} name="community" type="checkbox" label="Community" />
               </Form.Group>
               <Form.Group controlId="formBasicCheckbox m-2 p-2">
                   <Form.Check name="category" onChange={handleCheck} type="checkbox" label="Category" />
               </Form.Group>
                </div>
             </Form>
			<div className="s-container">
            <div className="project-container mb-5">
				<h4 id="title" className="mt-5 mb-3 align-middle">Search Results</h4>
                {projects ? projects.map((project) => (
                    <ProjectCard key={project.id} projectImage={projectImage} project={project} />
                )): null}
				<ProjectCard projectImage={projectImage2} />
				<ProjectCard projectImage={projectImage2} />
				<ProjectCard projectImage={projectImage} />
				<ProjectCard projectImage={projectImage} />
			</div>
            </div>
			<Footer />
		</div>
	);
};

export default SavedProject;