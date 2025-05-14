
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card } from '@/components/ui/card';

    const galleryItems = [
      { id: 1, description: 'Cosy fireplace at The Victoria Inn', alt: 'Pub fireplace with armchairs at The Victoria Inn' },
      { id: 2, description: 'Our lovely beer garden in Bradwell Village', alt: 'Sunny beer garden with tables at The Victoria Inn' },
      { id: 3, description: 'A lively quiz night in full swing', alt: 'People enjoying a pub quiz at The Victoria Inn' },
      { id: 4, description: 'Delicious Sunday Roast spread', alt: 'Sunday roast with all trimmings at The Victoria Inn' },
      { id: 5, description: 'The welcoming bar area with a wide selection of drinks', alt: 'Pub bar area with drink selection at The Victoria Inn' },
      { id: 6, description: 'Live music performance creating a great atmosphere', alt: 'Band playing live music in The Victoria Inn' },
      { id: 7, description: 'Exterior view of The Victoria Inn on a sunny day', alt: 'The Victoria Inn exterior on a sunny day' },
      { id: 8, description: 'A selection of our finest local ales', alt: 'Close up of ale taps at The Victoria Inn' },
      { id: 9, description: 'Guests enjoying a meal in our dining area', alt: 'People dining in The Victoria Inn' },
    ];

    const GalleryPage = () => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
      };

      return (
        <div className="animate-slide-in-up">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-serif mb-4 text-pub-red">Gallery</h1>
            <p className="text-lg text-pub-dark-brown max-w-2xl mx-auto">
              A glimpse into the life and atmosphere of The Victoria Inn.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {galleryItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="overflow-hidden glassmorphism-card group hover:shadow-2xl transition-all duration-300 border-pub-red/20">
                  <div className="aspect-w-4 aspect-h-3">
                    <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.alt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                  <div className="p-4 bg-pub-cream/50">
                    <p className="text-sm text-pub-dark-brown font-medium">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    };

    export default GalleryPage;
  