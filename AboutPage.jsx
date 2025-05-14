
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Users, ShieldCheck, Leaf } from 'lucide-react';

    const AboutPage = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
      };

      const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      };
      
      const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
      };

      return (
        <div className="animate-slide-in-up space-y-16">
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h1 className="text-5xl font-serif mb-6 text-pub-red">About The Victoria Inn</h1>
            <p className="text-xl text-pub-dark-brown max-w-3xl mx-auto leading-relaxed">
              Discover the story behind your favourite local. A tale of tradition, community, and a passion for good times in Bradwell Village, Milton Keynes.
            </p>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img  class="w-full h-auto object-cover max-h-[500px]" alt="Historic black and white photo of The Victoria Inn" src="https://images.unsplash.com/photo-1624344755839-0951555bc200" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-serif mb-6 text-pub-red">Our Rich History</h2>
              <p className="text-pub-dark-brown mb-4 leading-loose">
                The Victoria Inn has been a cherished FreeHouse in Bradwell Village for many years, serving as a hub for the Milton Keynes community. We pride ourselves on offering a traditional pub experience with a friendly atmosphere.
              </p>
              <p className="text-pub-dark-brown leading-loose">
                Through the years, The Victoria Inn has maintained its character as a welcoming place for locals and visitors to gather, enjoy good company, fine ales, and hearty food. We are dedicated to continuing this tradition for generations to come.
              </p>
            </div>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-serif text-center mb-12 text-pub-red">Our Values</h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={itemVariants}>
                <Card className="glassmorphism-card h-full text-center hover:shadow-xl transition-shadow duration-300 border-pub-gold/30">
                  <CardHeader className="items-center">
                    <Users className="h-12 w-12 text-pub-gold mb-3" />
                    <CardTitle className="text-pub-dark-brown">Community Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pub-dark-brown/90">
                      We believe a pub is the heart of its community. We strive to be a place where everyone feels welcome and connected.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="glassmorphism-card h-full text-center hover:shadow-xl transition-shadow duration-300 border-pub-gold/30">
                  <CardHeader className="items-center">
                    <ShieldCheck className="h-12 w-12 text-pub-gold mb-3" />
                    <CardTitle className="text-pub-dark-brown">Quality & Tradition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pub-dark-brown/90">
                      From our ales to our food, we uphold the highest standards, honouring traditional recipes and methods.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="glassmorphism-card h-full text-center hover:shadow-xl transition-shadow duration-300 border-pub-gold/30">
                  <CardHeader className="items-center">
                    <Leaf className="h-12 w-12 text-pub-gold mb-3" />
                    <CardTitle className="text-pub-dark-brown">Local Sourcing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pub-dark-brown/90">
                      We are committed to supporting local suppliers and producers, bringing you the freshest ingredients.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif mb-6 text-pub-red">Meet the Team (Figuratively!)</h2>
            <p className="text-xl text-pub-dark-brown max-w-3xl mx-auto leading-relaxed mb-8">
              The Victoria Inn is run by a dedicated team passionate about great service and creating a memorable pub experience. From our chefs in the kitchen to our friendly bar staff, we're all here to make your visit special.
            </p>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img  class="w-full h-auto object-cover max-h-[400px]" alt="Friendly pub staff smiling behind the bar at The Victoria Inn" src="https://images.unsplash.com/photo-1693430790132-6c42f71cf9ff" />
            </motion.div>
          </motion.section>
        </div>
      );
    };

    export default AboutPage;
  