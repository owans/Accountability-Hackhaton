import React from 'react';
import Footer from '../common/footer/Footer';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import CustomCard from '../common/Card';
import roadImage from '../../assets/card3.png';
import NavBar from '../common/Navbar';
import LocationImage from '../../assets/card1.png';
import SectorImage from '../../assets/card3.png';
import organisationImage from '../../assets/card2.png';

const Home = () => {
	return (
		<Container className="fuild" fluid={true}>
			<Row>
				<Col>
					<NavBar />
				</Col>
			</Row>
			<Col className="jombo">
				<div className="overlay" />
				<div className="inner">
					<h3>We are creating a new level of transparency by increasing civic participation in NDDC Projects</h3>
					<div className="s-div go-sixty mt-3">
						<input placeholder="Search Project" />
						<Button>Search</Button>
					</div>
				</div>
			</Col>
			<Row>
				<Col className="homeCards mb-5">
				   <CustomCard  image={SectorImage} name="sector"/>
					<CustomCard image={LocationImage} name="location"/>
					<CustomCard image={organisationImage} name="organisation" />
				</Col>
			</Row>
			<div className="intro">
				<div className="innerText">
					<p style={{ textAlign: 'center' }}>
					NDDC KICK STARTS 2ND BATCH OF 29 MEGA PROJECTS
					</p>
				</div>
			</div>
			<div className="intro">
				<Row className="innerText-green">
					<Col>
						<img style={{ width: 'auto' }} src={roadImage} alt="roadimg" />
					</Col>
					<Col>
						<p style={{ padding: '10px', fontSize: '25px', lineHeight: '3rem' }}>
						The Niger Delta Development Commission has commenced the process for the implementation of the 2nd batch of 29 mega projects sited across the region.
						</p>
					</Col>
				</Row>
			</div>
			<div className="prelast">
				<div className="container">
					<div className="pre-left">
					2 of the projects are sited in Abia state, 8 in Akwa Ibom, 2 in Bayelsa, one in Cross River and 7 in Delta state. Edo state has one, Imo 4 and Rivers 4.
					</div>
					<div className="pre-right">
					The 29 projects are outside the 53 already lined up for execution by NDDC in August.
					</div>
				</div>
			</div>
			<Footer />
		</Container>
	);
};

export default Home;
