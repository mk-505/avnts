import React from 'react';
import Layout from '@/components/Layout';
import { Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RentalManagement = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Car Rental Management</h1>
          <p className="section-subtitle text-center">Efficient solutions for fleet owners and operators</p>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-12">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Settings size={32} className="text-luxury-gold mr-4" />
                <h2 className="text-2xl font-serif font-bold">Luxury, Managed.</h2>
              </div>

              <p className="text-gray-700 mb-8">
                Let AVNTS turn your vehicle into an income-generating asset. Our Rental Management
                Program offers full-service care, from marketing and bookings to vehicle insurance
                maintenance — all underpinned by our premium customer experience.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4">Why Partner with AVNTS?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Maximized Returns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Zero Stress Ownership</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Professional Client Screening</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Impeccable Vehicle Maintenance</span>
                  </li>
                </ul>
              </div>

              <p className="text-center font-medium mb-8">
                Your car, your investment — our expertise.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Vehicle Portfolio</h3>
                  <p className="text-gray-700 mb-3">
                    Access detailed statistics and performance metrics for all vehicles enrolled with us.
                    Track revenue, maintenance history, and rental activity.
                  </p>
                  <Link to="/contact" className="text-luxury-gold hover:underline">Request a demo</Link>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Rental Contracts</h3>
                  <p className="text-gray-700 mb-3">
                    Review our transparent, owner-friendly contracts designed to protect your asset while
                    maximizing returns.
                  </p>
                  <Link to="/contact" className="text-luxury-gold hover:underline">View sample contract</Link>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold">Schedule a Consultation</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Ready to learn more about how our rental management program can work for you?
                  Book a call with one of our specialists to discuss your specific requirements.
                </p>
                <div className="text-center">
                  <a
                    href="https://calendly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-button inline-flex items-center"
                  >
                    Book a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RentalManagement;
