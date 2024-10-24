// src/components/WhatsAppButton.js
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '+918733956869'; // Replace with phone number
  const message = 'Hello, I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button>WhatsApp</button>
      {/* <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#25D366" /> */}
    </a>
  );
};

export default WhatsAppButton;
