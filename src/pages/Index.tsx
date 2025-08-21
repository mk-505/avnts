
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ChevronRight, Map, Clock, Shield } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-luxury-black flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/STEV4700.jpg')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 whitespace-nowrap">
              Quality Vehicles at <span className="text-luxury-gold">Fair Prices</span>
            </h1>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/cars" className="gold-button">
                View Our Inventory
              </Link>
              <Link to="/contact" className="gold-outline-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section with Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-luxury-gold italic font-medium mb-6">
              Dream it, Rent it, Own it.
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-black mb-6">
              At Aventis Autogroup
            </h2>
            <p className="text-xl text-luxury-gray mb-8">
              We believe luxury is more than a destination — it's a journey. Whether
              you're stepping into the driver's seat for the weekend or securing the keys to your next
              prized vehicle, we make the experience seamless, sophisticated, and tailored to you.
            </p>
            <p className="text-xl text-luxury-black mb-8">
              Explore a world where performance meets prestige
            </p>
            <div className="mt-8">
              <Link to="/services" className="gold-button">
                Discover Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-luxury-black">Featured Vehicles</h2>
          <p className="section-subtitle text-center mb-12">Check out some of our most popular options</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="STEV4591.jpg" 
                  alt="Mercedes Benz CLA45 AMG" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Mercedes Benz CLA45 AMG</h3>
                <p className="text-luxury-gray mb-4">High-performance compact coupe that blends aggressive styling with exhilarating power and precision handling.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-luxury-gold">$65/day</span>
                  <Link to="/cars" className="text-luxury-black font-medium flex items-center hover:text-luxury-gold transition-colors">
                    Details <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Car 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="STEV4545.jpg" 
                  alt="Toyota Rav4" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Toyota Rav4</h3>
                <p className="text-luxury-gray mb-4">Versatile, fuel-efficient compact SUV known for its reliability, comfort, and advanced safety features.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-luxury-gold">$79/day</span>
                  <Link to="/cars" className="text-luxury-black font-medium flex items-center hover:text-luxury-gold transition-colors">
                    Details <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Car 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="STEV4627.jpg" 
                  alt="Mercedes Benz E43 AMG" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Mercedes Benz E43 AMG</h3>
                <p className="text-luxury-gray mb-4">Sleek, high-performance compact sedan boasting turbocharged power, sharp handling, and AMG-tuned luxury.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-luxury-gold">$89/day</span>
                  <Link to="/cars" className="text-luxury-black font-medium flex items-center hover:text-luxury-gold transition-colors">
                    Details <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cars" className="gold-button">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-luxury-black">Why Choose Aventis</h2>
          <p className="section-subtitle text-center mb-12">Honest deals and quality service</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold mb-4">
                <Map size={32} className="text-luxury-black" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Convenient Location</h3>
              <p className="text-luxury-gray">Located right in your neighborhood with easy access and plenty of parking.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold mb-4">
                <Clock size={32} className="text-luxury-black" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Flexible Hours</h3>
              <p className="text-luxury-gray">Open evenings and weekends to accommodate your busy schedule.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold mb-4">
                <Shield size={32} className="text-luxury-black" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Full Coverage</h3>
              <p className="text-luxury-gray">Standard insurance included with all rentals, and affordable options for additional coverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-luxury-black">What Our Customers Say</h2>
          <p className="section-subtitle text-center mb-12">Hear from those who've experienced Aventis excellence</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-luxury-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-luxury-gray mb-4">
                "Exceptional service from start to finish. The team at Aventis made my car rental experience seamless and stress-free. Highly recommend!"
              </p>
              <div className="font-medium text-luxury-black">Sarah M.</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-luxury-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-luxury-gray mb-4">
                "Found the perfect vehicle through their sourcing service. Professional, efficient, and delivered exactly what I was looking for."
              </p>
              <div className="font-medium text-luxury-black">Michael R.</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-luxury-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-luxury-gray mb-4">
                "Outstanding quality and fair pricing. The detailing service transformed my car. Will definitely be coming back!"
              </p>
              <div className="font-medium text-luxury-black">Emma L.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-luxury-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Need a Car Today?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking to buy, rent, or just have questions, we're here to help.
          </p>
          <Link to="/contact" className="gold-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
