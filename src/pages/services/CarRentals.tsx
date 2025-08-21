
import React from 'react';
import Layout from '@/components/Layout';
import { Car, CheckCircle } from 'lucide-react';

const CarRentals = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Car Rental Services</h1>
          <p className="section-subtitle text-center">Premium vehicles for your every need</p>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-12">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Car size={32} className="text-luxury-gold mr-4" />
                <h2 className="text-2xl font-serif font-bold">The Pinnacle of Luxury Car Rentals</h2>
              </div>

              <p className="text-gray-700 mb-6">
                From economic/eco friendly sedans to exotic sports cars and high-end luxury, our rental
                fleet is hand-selected to offer you the very best. AVNTS Autogroup ensures that every drive
                feels exceptional, whether for business, pleasure, or passion.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4">Why AVNTS Rentals?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Curated Luxury Fleet</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Concierge-Level Service</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Door-to-Door Delivery & Pickup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-luxury-gold mr-2" />
                    <span>Flexible Terms</span>
                  </li>
                </ul>
              </div>

              <p className="text-center text-xl font-serif text-luxury-gold italic mt-6">
                Dream it. Rent it. Drive it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CarRentals;
