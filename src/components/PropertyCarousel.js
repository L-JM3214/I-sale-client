import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyCarousel = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from Flask API
    axios.get('your_flask_api_endpoint')
      .then(response => {
        setProperties(response.data); // Assuming your API returns an array of property objects
      })
      .catch(error => {
        console.error('Error fetching property data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <section className="section-property-carousel">
      <div className="container">
        <div className="property-carousel">
          {/* Carousel items go here */}
          {properties.map(property => (
            <div key={property.id} className="property-item">
              <img src={property.image} alt={property.title} />
              <div className="property-details">
                <h3>{property.title}</h3>
                <p>{property.description}</p>
              </div>
            </div>
          ))}
          {/* End of Carousel items */}
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;
