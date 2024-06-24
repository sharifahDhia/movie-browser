// src/components/StarRating.js
import React from 'react';
import '../styles/Star.css'; 

const StarRating = ({ rating }) => {
  // Calculate the number of full and half stars
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 !== 0;

  // Array to store star elements
  let stars = [];

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="star">&#9733;</span>);
  }

  // Half star
  if (hasHalfStar) {
    stars.push(<span key="half" className="star half">&#9733;</span>);
  }

  // Empty stars (to make total 5 stars)
  const emptyStarsCount = 5 - stars.length;
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<span key={`empty-${i}`} className="star">&#9734;</span>);
  }

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;
