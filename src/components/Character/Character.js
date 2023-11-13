// src/Character.js
import React from 'react';
import Quote from 'src/components/Quote/Quote'; // Import the Quote component


const Character = ({ name, quotes }) => {
  return (
    <div className="row border rounded p-4 m-2">
      <div className="row">
        <h1>{name}</h1>
      </div>
      <div className="row">
        {quotes.map((quote, index) => (
          <Quote key={index} text={quote} />
        ))}
      </div>
    </div>
  );
};

export default Character;