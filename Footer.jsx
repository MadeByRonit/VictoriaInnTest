
    import React from 'react';
    import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      const iconVariants = {
        hover: { scale: 1.2, rotate: 5, color: 'hsl(var(--secondary))' },
        tap: { scale: 0.9 },
      };

      return (
        <footer className="bg-pub-dark-brown text-pub-cream py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-pub-gold">The Victoria Inn</h3>
                <p className="text-sm leading-relaxed">
                  A cosy FreeHouse pub in Bradwell Village, Milton Keynes. Serving fine ales, hearty food, and a warm welcome to all.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-pub-gold">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="hover:text-pub-gold transition-colors">Home</Link></li>
                  <li><Link to="/menu" className="hover:text-pub-gold transition-colors">Menu</Link></li>
                  <li><Link to="/about" className="hover:text-pub-gold transition-colors">About Us</Link></li>
                  <li><Link to="/gallery" className="hover:text-pub-gold transition-colors">Gallery</Link></li>
                  <li><Link to="/events-news" className="hover:text-pub-gold transition-colors">Events & News</Link></li>
                  <li><Link to="/contact" className="hover:text-pub-gold transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-pub-gold">Connect With Us</h3>
                <div className="flex space-x-4 mb-4">
                  <motion.a href="https://www.facebook.com/people/The-Victoria-Inn-Mk/61552505228583/" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover" whileTap="tap" className="text-pub-cream hover:text-pub-gold transition-colors">
                    <Facebook size={24} />
                  </motion.a>
                  <motion.a href="https://www.instagram.com/TheVictoriainnmk/" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover" whileTap="tap" className="text-pub-cream hover:text-pub-gold transition-colors">
                    <Instagram size={24} />
                  </motion.a>
                  {/* <motion.a href="#" variants={iconVariants} whileHover="hover" whileTap="tap" className="text-pub-cream hover:text-pub-gold transition-colors">
                    <Twitter size={24} />
                  </motion.a> */}
                </div>
                <div className="space-y-2 text-sm">
                    <p className="flex items-center"><MapPin size={16} className="mr-2 text-pub-gold" /> Bradwell Village, Milton Keynes</p>
                    <p className="flex items-center"><Phone size={16} className="mr-2 text-pub-gold" /> (Your Pub Phone)</p>
                    <p className="flex items-center"><Mail size={16} className="mr-2 text-pub-gold" /> info@thevictoriainnmk.co.uk</p>
                </div>
              </div>
            </div>
            <div className="border-t border-pub-cream/20 pt-8 text-center text-sm">
              <p>&copy; {currentYear} The Victoria Inn. All rights reserved.</p>
              <p className="mt-1">Website by Hostinger Horizons</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
  