import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer';
import ContactUsBody from '../Component/ContactUsBody';
import LocationSection from '../Component/LocationSection';
import FAQ from '../Component/FAQ';

const ContactUs = () => {
  return (
    <div>
      <Header/>
      <ContactUsBody/>
      <LocationSection/>
      <FAQ/>
      <Footer/>
    </div>
    
  )
}

export default ContactUs;