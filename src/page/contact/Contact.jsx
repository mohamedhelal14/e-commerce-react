import React, { useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loadingToast = toast.loading('Sending message...');

    emailjs
      .sendForm(
        'service_oxsqcw1',
        'template_nwyr4he',
        form.current,
        'EWZrB1DUY2GnJyy1L'
      )
      .then(
        () => {
          toast.dismiss(loadingToast);
          toast.success('Thank you for contacting us! We will get back to you soon.');
          form.current.reset(); // إعادة تعيين الحقول
        },
        (error) => {
          toast.dismiss(loadingToast);
          toast.error('Failed to send message. Please try again later.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <div className="contact_page">
      <div className="container">
        <div className="contact_header">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
        </div>

        <div className="contact_wrapper">
          <div className="contact_info">
            <h3>Get In Touch</h3>
            <p>Reach out to us through any of the following contact points:</p>

            <div className="info_item">
              <FaPhoneAlt className="info_icon" />
              <div>
                <h4>Phone</h4>
                <p>+20 1090504714</p>
              </div>
            </div>

            <div className="info_item">
              <FaEnvelope className="info_icon" />
              <div>
                <h4>Email</h4>
                <p>support@manga-store.com</p>
              </div>
            </div>

            <div className="info_item">
              <FaMapMarkerAlt className="info_icon" />
              <div>
                <h4>Address</h4>
                <p>Cairo, Egypt</p>
              </div>
            </div>
          </div>

          <form ref={form} className="contact_form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>

            <div className="form_group">
              <label>Full Name</label>
              <input name="name" type="text" placeholder="John Doe" required />
            </div>

            <div className="form_group">
              <label>Email Address</label>
              <input name="email" type="email" placeholder="example@mail.com" required />
            </div>

            <div className="form_group">
              <label>Subject</label>
              <input name="subject" type="text" placeholder="How can we help?" required />
            </div>

            <div className="form_group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" className="btn_send">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;