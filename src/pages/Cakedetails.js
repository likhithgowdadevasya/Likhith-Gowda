import React from 'react';
import { useParams } from 'react-router-dom';

const cakes = [
    { id: 1, name: 'Chocolate Cake', price: '$20', description: 'Rich chocolate cake with creamy frosting.', image: '/images/chocolate-cake.jpg' },
    { id: 2, name: 'Vanilla Cake', price: '$18', description: 'Classic vanilla cake with a smooth finish.', image: '/images/vanilla-cake.jpg' },
    { id: 3, name: 'Red Velvet Cake', price: '$25', description: 'Moist red velvet cake with a tangy cream cheese frosting.', image: '/images/red-velvet-cake.jpg' },
];

const CakeDetails = () => {
    const { id } = useParams();
    const cake = cakes.find((cake) => cake.id === parseInt(id));

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <img src={cake.image} alt={cake.name} style={{ width: '300px', borderRadius: '10px' }} />
            <h1>{cake.name}</h1>
            <p>{cake.description}</p>
            <p><strong>Price: {cake.price}</strong></p>
        </div>
    );
};

export default CakeDetails;
