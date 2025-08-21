import React from 'react';
import Layout from '@/components/Layout';
import { Wrench, CheckCircle } from 'lucide-react';

const DetailingWrappingTinting = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Detailing, Wrapping & Tinting</h1>
          <p className="section-subtitle text-center">Premium care for luxury vehicles</p>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-12">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Wrench size={32} className="text-luxury-gold mr-4" />
                <h2 className="text-2xl font-serif font-bold">Perfection in Every Detail</h2>
              </div>
              
              <p className="text-gray-700 mb-8">
                Preserve and elevate the look of your car with our professional-grade services. Aventis
                Autogroup offers detailing, vehicle wrapping, and premium tinting — all executed to the
                highest industry standards.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4">Our Services:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Ceramic Coating & Paint Protection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Full & Partial Vinyl Wraps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>High-Performance Window Tints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Interior & Exterior Detailing Packages</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center mt-8">
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
    </Layout>
  );
};

export default DetailingWrappingTinting;
