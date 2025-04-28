import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const RegistrationForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading state
    setIsSubmitting(true);
    setStatusMessage('Sending...');

    try {
      // EmailJS configuration - Replace with your values
      const result = await emailjs.send(
        'service_h4979tt', // Service ID
        'template_yt53dsd', // Template ID
        formData,           // Form data
        'PBHiiPFr0eUzKCrUH'      // User ID
      );
      console.log(result.text);
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error(error.text);
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-80">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#465697] text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {/* Display status message */}
        {statusMessage && (
          <div className="mt-4 text-center text-sm text-gray-700">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
