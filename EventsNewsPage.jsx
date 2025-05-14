
    import React, { useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Instagram, Facebook } from 'lucide-react';

    const EventsNewsPage = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

      useEffect(() => {
        // Load Facebook SDK
        const scriptId = 'facebook-jssdk';
        if (document.getElementById(scriptId)) return; 
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.nonce = "YOUR_NONCE_VALUE"; // Replace with a dynamically generated nonce if using CSP
        document.body.appendChild(script);
    
        return () => {
          const fbScript = document.getElementById(scriptId);
          if (fbScript) {
            document.body.removeChild(fbScript);
          }
          // Clean up any FB root div if it exists
          const fbRoot = document.getElementById('fb-root');
          if (fbRoot) {
            fbRoot.innerHTML = ''; // Clear its content
          }
        };
      }, []);


      return (
        <div className="animate-slide-in-up space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-serif mb-4 text-pub-red">Events & News</h1>
            <p className="text-lg text-pub-dark-brown max-w-2xl mx-auto">
              Stay updated with the latest happenings, events, and posts from The Victoria Inn.
            </p>
          </motion.div>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Card className="glassmorphism-card border-pub-gold/30">
              <CardHeader className="flex flex-row items-center space-x-3">
                <Instagram className="h-8 w-8 text-pub-red" />
                <CardTitle className="text-3xl text-pub-red">Latest on Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pub-dark-brown/80">
                  Follow us <a href="https://www.instagram.com/TheVictoriainnmk/" target="_blank" rel="noopener noreferrer" className="text-pub-gold hover:underline">@TheVictoriaInnMK</a> for more updates!
                </CardDescription>
                <div className="bg-pub-cream/30 p-6 rounded-lg text-center">
                  <p className="text-pub-dark-brown">
                    Instagram feed integration is a complex feature that typically requires using the official Instagram API or a third-party service.
                    For now, this is a placeholder. We can explore embedding options that comply with Instagram's policies.
                  </p>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-96 overflow-y-auto p-2 rounded border border-pub-dark-brown/20">
                    {[1,2,3,4,5,6].map(i => (
                       <div key={i} className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                         <img  alt={`Placeholder Instagram post ${i}`} src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0" />
                       </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Card className="glassmorphism-card border-pub-red/30">
              <CardHeader className="flex flex-row items-center space-x-3">
                <Facebook className="h-8 w-8 text-pub-red" />
                <CardTitle className="text-3xl text-pub-red">Recent Facebook Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pub-dark-brown/80">
                  Check out our latest posts on <a href="https://www.facebook.com/people/The-Victoria-Inn-Mk/61552505228583/" target="_blank" rel="noopener noreferrer" className="text-pub-gold hover:underline">Facebook</a>.
                </CardDescription>
                <div id="fb-root"></div>
                <div 
                  className="fb-page" 
                  data-href="https://www.facebook.com/people/The-Victoria-Inn-Mk/61552505228583/" 
                  data-tabs="timeline" 
                  data-width="" 
                  data-height="600" 
                  data-small-header="false" 
                  data-adapt-container-width="true" 
                  data-hide-cover="false" 
                  data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/people/The-Victoria-Inn-Mk/61552505228583/" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/people/The-Victoria-Inn-Mk/61552505228583/">The Victoria Inn Mk</a>
                  </blockquote>
                </div>
                <div className="mt-4 p-4 bg-pub-cream/30 rounded-lg text-sm text-pub-dark-brown">
                  Note: Facebook feed display is controlled by Facebook. Appearance may vary. Ensure your browser allows third-party cookies/scripts for the feed to load correctly.
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      );
    };

    export default EventsNewsPage;
  