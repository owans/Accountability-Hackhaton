import React from 'react';
import Footer from '../common/footer/Footer';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import CustomCard from '../common/Card';
import roadImage from '../../assets/card3.png';
import NavBar from '../common/Navbar';
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
						<input placeholder="suscribe to news letter" />
						<Button>Subscribe</Button>
					</div>
				</div>
			</Col>
			<Row>
				<Col className="homeCards mb-5">
					<CustomCard />
					<CustomCard />
					<CustomCard />
				</Col>
			</Row>
			<div className="intro">
				<div className="innerText">
					<p style={{ textAlign: 'center' }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam perspiciatis harum qui neque, quod magni
						dignissimos pariatur cupiditate tempora distinctio numquam voluptas, debitis porro recusandae facere. Eaque
						provident maiores id!
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
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta beatae provident eveniet, ipsam odio
							magnam eaque repellat cupiditate aliquid accusamus optio ex dolore facere eos nam sit adipisci eius saepe.
						</p>
					</Col>
				</Row>
			</div>
			<div className="prelast">
				<div className="container">
					<div className="pre-left">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ab beatae nulla iure at qui itaque modi,
						aperiam id reprehenderit. Unde vitae minima vel, ipsa sint sit eius nam corporis.
					</div>
					<div className="pre-right">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptatem explicabo qui dolore, magni
						incidunt aliquid autem velit alias officiis temporibus ipsum quia commodi, architecto atque veniam iste?
						Magnam, ipsum.
					</div>
				</div>
			</div>
			<Footer />
		</Container>
	);
};

export default Home;
