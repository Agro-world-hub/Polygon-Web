import React from 'react';
import './Style/Hero.css';
import leftImage from '../images/HandPlant.png'; 
import rightImage from '../images/GrowingPlant.jpg'; 

const HeroSection = () => {
    return (
      <section className="hero-section">
        {/* Left Side with Background Image and Text */}
        <div className="hero-left">
          <img src={leftImage} alt="Background Design" className="hero-left-image" />
          <div className="hero-text">
            <h1>Empowering the Future of<br/> Agriculture in Sri Lanka</h1>
            <p>
              Transform and elevate the farmers and agripreneurs of Sri Lanka to use a future-ready Agri-Fin-Tech platform for sustainable growth.
            </p>
          </div>
        </div>
  
        {/* Right Side with Image */}
        <div className="hero-right">
          <img src={rightImage} alt="Agriculture Growth" className="hero-right-image"/>
        </div>
      </section>
    );
};

export default HeroSection;
