import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../assets/card2.png';

const CardCustom = () => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={img} />
			<Card.Body>
				<Card.Text>
					Explore Project by <br /> <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Sector</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CardCustom;
