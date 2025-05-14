
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Utensils, Beer, CalendarDays, Newspaper } from 'lucide-react';

    const HomePage = () => {
      const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

      const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };

      return (
        <div className="animate-fade-in">
          <motion.section
            className="relative h-[70vh] min-h-[400px] max-h-[600px] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img  class="absolute inset-0 w-full h-full object-cover" alt="Warm and inviting interior of The Victoria Inn pub" src="https://images.unsplash.com/photo-1625833525716-b28bb36072a7" />
            <motion.div 
              className="relative z-20 p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-shadow-lg leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Welcome to The Victoria Inn
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-sans max-w-2xl mx-auto" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
                Your cosy FreeHouse pub in Bradwell Village, Milton Keynes.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-pub-gold hover:bg-pub-gold/90 text-pub-dark-brown font-bold py-3 px-8 rounded-md text-lg shadow-md transition-transform transform hover:scale-105">
                  <Link to="/menu">Explore Our Menu</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section 
            className="py-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-serif text-center mb-12 text-pub-red">Why Visit Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeIn}>
                <Card className="glassmorphism-card h-full hover:shadow-xl transition-shadow duration-300 border-pub-red/30">
                  <CardHeader className="items-center">
                    <Beer className="h-12 w-12 text-pub-red mb-2" />
                    <CardTitle className="text-pub-red">Fine Ales & Drinks</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-pub-dark-brown">
                      Discover a wide selection of locally brewed ales, ciders, fine wines, and spirits. Perfect for any occasion.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="glassmorphism-card h-full hover:shadow-xl transition-shadow duration-300 border-pub-red/30">
                  <CardHeader className="items-center">
                    <Utensils className="h-12 w-12 text-pub-red mb-2" />
                    <CardTitle className="text-pub-red">Hearty British Food</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-pub-dark-brown">
                      Enjoy classic pub fare made with fresh, locally sourced ingredients. From Sunday roasts to daily specials.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="glassmorphism-card h-full hover:shadow-xl transition-shadow duration-300 border-pub-red/30">
                  <CardHeader className="items-center">
                    <CalendarDays className="h-12 w-12 text-pub-red mb-2" />
                    <CardTitle className="text-pub-red">Community Events</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-pub-dark-brown">
                      Join us for quiz nights, live music, and seasonal celebrations. There's always something happening at The Victoria Inn!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="glassmorphism-card h-full hover:shadow-xl transition-shadow duration-300 border-pub-red/30">
                  <CardHeader className="items-center">
                    <Newspaper className="h-12 w-12 text-pub-red mb-2" />
                    <CardTitle className="text-pub-red">What's On</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-pub-dark-brown">
                      Check out our latest updates, events, and news. Don't miss out on the fun!
                    </p>
                    <Button asChild size="sm" className="mt-4 bg-pub-gold hover:bg-pub-gold/90 text-pub-dark-brown">
                      <Link to="/events-news">View Events & News</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          <motion.section 
            className="py-16 bg-pub-dark-brown text-pub-cream rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-serif mb-6 text-pub-gold">A Warm Welcome Awaits</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Step into The Victoria Inn and experience the charm of a traditional British pub. Whether you're looking for a quiet pint, a delicious meal, or a lively evening with friends, we've got you covered. Our friendly staff are always on hand to make your visit memorable.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="secondary" className="bg-pub-gold hover:bg-pub-gold/90 text-pub-dark-brown font-bold py-3 px-8 rounded-md text-lg shadow-md">
                  <Link to="/contact">Find Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </div>
      );
    };

    export default HomePage;
  