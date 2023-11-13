// import Character from "src/components/Character/Character";
import React from 'react';


const App = ({ props }) => {
  return (
    <div className="container">
      {props.map((character, index) => (
        <div key={index} className="border rounded p-4 m-2">
          <div>
            <h1>{character.name}</h1>
          </div>
          <div className="row">
            {character.quotes.map((quote, quoteIndex) => (
              <div key={quoteIndex} className="col-sm-4 mb-2">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">{quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;