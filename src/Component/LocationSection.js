import React from 'react';
import './Style/LocationSection.css';

const LocationSection = () => {
  return (
    <div className="location-section">
      <div className="map-container">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.099578121774!2d79.85082761477746!3d6.934996194984437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593301225c4b%3A0xaaa750c8fb533a34!2sSir%20Baron%20Jayathilake%20Mawatha%2C%20Colombo%2001!5e0!3m2!1sen!2slk!4v1679658198505!5m2!1sen!2slk"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="address-container">
        <h3>Our Location</h3>
        <h4>Connecting Near and Far</h4>
        <p>
          * Headquarters
          <br />
          No. 14, Sir Baron Jayathilake Mawatha,
          <br />
          Colombo 01, Western 00100, LK
        </p>
        <p>
          * Corporate Office
          <br/>
          Forbes & Walkers Building 2,
          <br/>
          No.46/42
          <br/>
          Colombo 02.
        </p>
      </div>
    </div>
  );
};

export default LocationSection;
