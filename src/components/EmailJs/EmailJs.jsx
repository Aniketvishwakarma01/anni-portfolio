import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Emailjs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent!");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Message failed to send.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Emailjs;
