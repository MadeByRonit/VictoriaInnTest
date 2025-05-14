
    import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { MapPin, Phone, Mail, Clock } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const ContactPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
          localStorage.setItem('contactFormSubmissionVictoriaInn', JSON.stringify(formData));
          toast({
            title: "Message Sent!",
            description: "Thank you for contacting The Victoria Inn. We'll be in touch soon.",
            variant: "default",
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        }, 1500);
      };

      const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
      
      const infoVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
      };

      return (
        <div className="animate-slide-in-up">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-serif mb-4 text-pub-red">Get In Touch</h1>
            <p className="text-lg text-pub-dark-brown max-w-2xl mx-auto">
              We'd love to hear from you! Whether it's a booking enquiry or just a friendly hello at The Victoria Inn.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={infoVariants} initial="hidden" animate="visible">
              <Card className="glassmorphism-card h-full border-pub-gold/30">
                <CardHeader>
                  <CardTitle className="text-3xl text-pub-red">Contact Information</CardTitle>
                  <CardDescription className="text-pub-dark-brown/80">Find us or drop us a line.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-pub-dark-brown">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 mt-1 text-pub-gold" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>The Victoria Inn, 6 Vicarage Road, Bradwell Village, Milton Keynes, MK13 9AQ</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-3 mt-1 text-pub-gold" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p>(Your Pub Phone Number)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-3 mt-1 text-pub-gold" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>info@thevictoriainnmk.co.uk (or your actual email)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mr-3 mt-1 text-pub-gold" />
                    <div>
                      <h3 className="font-semibold">Opening Hours</h3>
                      <p>Monday - Thursday: 12pm - 11pm</p>
                      <p>Friday - Saturday: 12pm - 12am</p>
                      <p>Sunday: 12pm - 10pm</p>
                      <p>(Food service times may vary - please check)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={formVariants} initial="hidden" animate="visible">
              <Card className="glassmorphism-card border-pub-red/30">
                <CardHeader>
                  <CardTitle className="text-3xl text-pub-red">Send Us a Message</CardTitle>
                  <CardDescription className="text-pub-dark-brown/80">We'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-pub-dark-brown">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="bg-pub-cream/50 border-pub-dark-brown/30 focus:border-pub-red"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-pub-dark-brown">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john.doe@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="bg-pub-cream/50 border-pub-dark-brown/30 focus:border-pub-red"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-pub-dark-brown">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Your message here..." 
                        rows={5} 
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        className="bg-pub-cream/50 border-pub-dark-brown/30 focus:border-pub-red"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full bg-pub-red hover:bg-pub-red/90 text-pub-cream font-semibold py-3" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-serif text-center mb-6 text-pub-red">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-300">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.800055,52.06900,-0.797855,52.07000&layer=mapnik&marker=52.06947,-0.798955"
                width="100%"
                height="450"
                style={{ border:0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location of The Victoria Inn, 6 Vicarage Road, Bradwell Village, Milton Keynes, MK13 9AQ"
              ></iframe>
            </div>
          </motion.div>
        </div>
      );
    };

    export default ContactPage;
  