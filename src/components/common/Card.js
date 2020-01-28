import React from 'react';
import { Card } from 'react-bootstrap';


const CardCustom = ({image, name}) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Text>
	Explore Project by <br /> <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{name}</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CardCustom;
