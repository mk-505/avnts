import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_firstName: formData.name.split(' ')[0] || formData.name,
      from_email: formData.email,
      from_number: formData.phone,
      user_message: formData.message
    };

    emailjs.send('service_jjyr7p5', 'template_sco5gc2', templateParams, 'E32bROpCInXRA6Udp')
      .then(() => {
        toast.success('Message sent successfully! We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast.error('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-luxury-black flex items-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/31c7f64b-7750-451e-99cc-56b90885795c.png')] bg-cover bg-center opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Contact <span className="text-luxury-gold">Us</span>
            </h1>
            <p className="text-xl text-white">
              Reach out to us for inquiries, reservations, or special requests.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8" id="contact-form">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center">Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxury-gray mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input-field"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-luxury-gray mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input-field"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-luxury-gray mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input-field"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-luxury-gray mb-1">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      className="input-field"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Reservation">Vehicle Reservation</option>
                      <option value="Information">General Information</option>
                      <option value="Services">Premium Services</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-luxury-gray mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="input-field"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="gold-button flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-luxury-gray mb-8">
                Whether you have questions about our vehicles, need assistance with a reservation,
                or want to discuss personalized services, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Our Location</h3>
                    <p className="text-luxury-gray">1940 Eglinton Ave East</p>
                    <p className="text-luxury-gray">Scarborough, ON, M1L 4R1</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-luxury-gray">Main: (437) 553-9211</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-luxury-gray">contact@avntsautogroup.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Hours of Operation</h3>
                    <p className="text-luxury-gray">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-luxury-gray">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-luxury-gray">Sunday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-md h-[500px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.086188017623!2d-79.28463995797225!3d43.72953637339704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce0a5fe8606f%3A0x72ca8577a1473cd6!2s1940%20Eglinton%20Ave%20E%2C%20Scarborough%2C%20ON%20M1L%204R1!5e0!3m2!1sen!2sca!4v1744432414477!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AVNTS Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
