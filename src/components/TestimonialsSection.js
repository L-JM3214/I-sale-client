import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from Flask API
    axios.get('your_flask_testimonials_endpoint')
      .then(response => {
        setTestimonials(response.data);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  return (
    <section className="section-testimonials section-t8 nav-arrow-a">
      <div className="container">
        {/* Your existing TestimonialsSection JSX */}
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="carousel-item-a swiper-slide">
            <div className="testimonials-box">
              {/* Testimonial content */}
              <p>{testimonial.content}</p>
            </div>
          </div>
        ))}
        {/* End of Testimonial items */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
