/* 
File Name: ContactMe.jsx
Student Name: Iuri Melo
Student ID: 301382883
Date: 2024-09-24
*/

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


function Contact() {
  
  // State: form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // State: submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State: error handling
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.error('Error:', error.text);
      setError('Failed to send the message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-container">
      {/* Heading */}
      <h2>Send Us a Message</h2>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        
        {/* First Name Field */}
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name Field */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contact Number Field */}
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
