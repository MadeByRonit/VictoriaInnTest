
    import React, { useState } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Menu, X, Beer, Utensils, Info, Image as ImageIcon, Mail, Newspaper } from 'lucide-react'; // Added Newspaper
    import { Button } from '@/components/ui/button';

    const navItems = [
      { name: 'Home', path: '/', icon: <Beer className="h-5 w-5 mr-2" /> },
      { name: 'Menu', path: '/menu', icon: <Utensils className="h-5 w-5 mr-2" /> },
      { name: 'About Us', path: '/about', icon: <Info className="h-5 w-5 mr-2" /> },
      { name: 'Gallery', path: '/gallery', icon: <ImageIcon className="h-5 w-5 mr-2" /> },
      { name: 'Events & News', path: '/events-news', icon: <Newspaper className="h-5 w-5 mr-2" /> }, // Added Events & News
      { name: 'Contact', path: '/contact', icon: <Mail className="h-5 w-5 mr-2" /> },
    ];

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => setIsOpen(!isOpen);

      const linkVariants = {
        hover: { scale: 1.1, color: 'hsl(var(--secondary))' },
        tap: { scale: 0.95 },
      };

      const mobileMenuVariants = {
        open: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        closed: { opacity: 0, y: "-100%", transition: { staggerChildren: 0.05, staggerDirection: -1 } },
      };
      
      const mobileLinkVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -20 },
      };

      return (
        <header className="bg-gradient-to-r from-pub-red via-red-700 to-pub-red shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-3xl font-serif font-bold text-pub-cream hover:text-pub-gold transition-colors duration-300">
              The Victoria Inn
            </Link>
            <nav className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={linkVariants} whileHover="hover" whileTap="tap">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center text-pub-cream hover:text-pub-gold transition-colors duration-300 font-medium pb-1 border-b-2 text-sm ${
                        isActive ? 'border-pub-gold text-pub-gold' : 'border-transparent'
                      }`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="md:hidden">
              <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-pub-cream hover:text-pub-gold">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={mobileMenuVariants}
            className="md:hidden absolute top-full left-0 right-0 bg-pub-red/95 backdrop-blur-sm shadow-lg py-2 z-40"
          >
            <nav className="flex flex-col items-center space-y-3 py-4">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={mobileLinkVariants} className="w-full text-center">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-center w-full py-3 text-pub-cream hover:bg-pub-red/50 hover:text-pub-gold transition-colors duration-300 text-lg ${
                        isActive ? 'bg-pub-red/70 text-pub-gold' : ''
                      }`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </header>
      );
    };

    export default Header;
  