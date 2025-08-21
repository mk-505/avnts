
import React from 'react';
import Layout from '@/components/Layout';
import { DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarSalesFinancing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-luxury-black flex items-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/f9a5d58e-7077-4410-b728-759360f06c5a.png')] bg-cover bg-center opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Vehicle Sales & <span className="text-luxury-gold">Financing</span>
            </h1>
            <p className="text-xl text-white">
              Affordable solutions to own your dream vehicle
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Vehicle Sales & Financing</h1>
          <p className="section-subtitle text-center">Affordable solutions to own your dream vehicle</p>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-12">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign size={32} className="text-luxury-gold mr-4" />
                <h2 className="text-2xl font-serif font-bold">Own the Exceptional</h2>
              </div>

              <p className="text-gray-700 mb-8">
                Buying a car should feel as luxurious as driving it. At AVNTS, we offer an exclusive selection
                of high-end vehicles, paired with expert guidance and flexible financing designed to fit your
                lifestyle.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4">What We Offer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Premium Pre-Owned Inventory</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Financing & Pre-Approvals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Trade-Ins Welcome</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>White-Glove Delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-3">Flexible Approval Process</h3>
                <p className="text-gray-700 mb-2">
                  We believe in no-tension approvals. Our financing process is designed to be straightforward
                  and accommodating, working with multiple lenders to find the best solution for your situation.
                </p>
              </div>

              <p className="text-center text-xl font-serif text-luxury-gold italic mt-6">
                Dream it. Own it. Live it.
              </p>

              <div className="text-center mt-8">
                <Link to="/credit" className="gold-button">Apply for Financing</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CarSalesFinancing;
