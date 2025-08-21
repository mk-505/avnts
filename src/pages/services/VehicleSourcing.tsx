
import React from 'react';
import Layout from '@/components/Layout';
import { Search, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehicleSourcing = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Vehicle Sourcing</h1>
          <p className="section-subtitle text-center">Finding your dream car wherever it may be</p>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-12">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Search size={32} className="text-luxury-gold mr-4" />
                <h2 className="text-2xl font-serif font-bold">Your Dream Car, Delivered</h2>
              </div>
              
              <p className="text-gray-700 mb-8">
                Looking for something specific that we don't have available? Aventis Autogroup specializes
                in wholesaling vehicles, Experts in locating and securing reliable, exotic, and hard-to-find
                vehicles tailored for your needs.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4">Our Promise:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Exclusive Market Access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Transparent Sourcing Process</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Tailored to Your Exact Specifications</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-center text-xl font-serif text-luxury-gold italic mt-6">
                If you can dream it, we can source it.
              </p>
              
              <div className="text-center mt-8">
                <Link to="/contact#contact-form" className="gold-button">Start Your Search</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VehicleSourcing;
