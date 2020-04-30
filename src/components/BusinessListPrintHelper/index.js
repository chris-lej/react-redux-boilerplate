import React from 'react';

// The goal of this component is to easily print to the screen the list of businesses according to the service search for in Yelp (apiData).
// This component could be ignored and will ideally be removed in the future. Quick easy hack to get the info and move forward to whitelist businesses.

function Index(props) {
  return (
    <div>
      <ul>
        {props.businesses.map((business) => (
          <li key={business.id}>
            <div className="row">
              Name: {business.name}
              <br />
              id: {business.id} (ignore this)
            </div>
            <div className="row">
              Phone: {business.phone}
            </div>
            <br />
            <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
