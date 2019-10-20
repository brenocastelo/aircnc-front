import React, { useState } from 'react';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  return (
    <>
      <ul>
        {spots.map(spot => (
          <li key={spot._id}>
            <header />
            <strong>spot.company</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>
    </>
  );
}