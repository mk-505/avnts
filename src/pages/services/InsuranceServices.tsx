
import React from 'react';
import Layout from '@/components/Layout';
import { Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsuranceServices = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Insurance Services</h1>
          <p className="section-subtitle text-center">Comprehensive coverage for your peace of mind</p>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-12">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Shield size={32} className="text-luxury-gold mr-4" />
                <h2 className="text-2xl font-serif font-bold">Protection Meets Prestige</h2>
              </div>
              
              <p className="text-gray-700 mb-8">
                Aventis makes securing your vehicle simple, offering tailored insurance solutions that match
                your lifestyle and safeguard your investment.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Flexible Plans for Rentals & Ownership</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Comprehensive Coverage Options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Expert Policy Guidance</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700 mb-6">
                Your car deserves more than standard coverage — it deserves Aventis protection.
              </p>
              
              <div className="text-center">
                <Link to="/contact#contact-form" className="gold-button">Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InsuranceServices;
