
    import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { Utensils, Beer, Wine, Coffee } from 'lucide-react';

    const menuSections = [
      {
        title: 'Starters & Sharers',
        icon: <Utensils className="h-8 w-8 text-pub-red mr-3" />,
        items: [
          { name: 'Soup of the Day', price: '£6.50', description: 'Served with crusty bread and butter.' },
          { name: 'Prawn Cocktail', price: '£8.00', description: 'Classic recipe with Marie Rose sauce.' },
          { name: 'Garlic Mushrooms', price: '£7.00', description: 'Creamy garlic sauce, toasted sourdough.' },
          { name: 'Sharing Platter', price: '£15.00', description: 'Selection of cured meats, cheeses, olives, and bread.' },
        ],
      },
      {
        title: 'Main Courses',
        icon: <Utensils className="h-8 w-8 text-pub-red mr-3" />,
        items: [
          { name: 'Fish and Chips', price: '£14.50', description: 'Beer-battered cod, chunky chips, mushy peas, tartare sauce.' },
          { name: 'Steak and Ale Pie', price: '£15.00', description: 'Shortcrust pastry, seasonal vegetables, gravy.' },
          { name: 'Bangers and Mash', price: '£13.00', description: 'Local sausages, creamy mash, onion gravy.' },
          { name: 'Sunday Roast (Sundays Only)', price: '£16.00', description: 'Choice of beef, chicken, or nut roast with all the trimmings.' },
          { name: 'Vegetarian Shepherd\'s Pie', price: '£13.50', description: 'Lentil and vegetable filling, cheesy mash topping.' },
        ],
      },
      {
        title: 'Desserts',
        icon: <Utensils className="h-8 w-8 text-pub-red mr-3" />,
        items: [
          { name: 'Sticky Toffee Pudding', price: '£7.00', description: 'With toffee sauce and vanilla ice cream.' },
          { name: 'Apple Crumble', price: '£6.50', description: 'Served with custard or ice cream.' },
          { name: 'Chocolate Brownie', price: '£7.00', description: 'Warm brownie with chocolate sauce and ice cream.' },
        ],
      },
      {
        title: 'Ales & Ciders',
        icon: <Beer className="h-8 w-8 text-pub-gold mr-3" />,
        items: [
          { name: 'Local Best Bitter', price: '£4.50/pint' },
          { name: 'Guest Ale', price: '£4.80/pint' },
          { name: 'Traditional Cider', price: '£4.60/pint' },
          { name: 'Lager', price: '£5.00/pint' },
        ],
      },
      {
        title: 'Wines',
        icon: <Wine className="h-8 w-8 text-pub-gold mr-3" />,
        items: [
          { name: 'House Red/White/Rosé', price: '£5.50/glass | £20.00/bottle' },
          { name: 'Sauvignon Blanc', price: '£6.50/glass | £24.00/bottle' },
          { name: 'Merlot', price: '£6.50/glass | £24.00/bottle' },
        ],
      },
      {
        title: 'Hot Drinks',
        icon: <Coffee className="h-8 w-8 text-pub-gold mr-3" />,
        items: [
          { name: 'Espresso', price: '£2.50' },
          { name: 'Cappuccino/Latte', price: '£3.00' },
          { name: 'Tea (various)', price: '£2.50' },
        ],
      },
    ];

    const MenuPage = () => {
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

      return (
        <div className="animate-slide-in-up space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-serif mb-4 text-pub-red">Our Menu</h1>
            <p className="text-lg text-pub-dark-brown max-w-2xl mx-auto">
              Delicious home-cooked food and a fine selection of drinks, crafted with care and local ingredients.
            </p>
          </motion.div>

          {menuSections.map((section, sectionIndex) => (
            <motion.section 
              key={sectionIndex} 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <div className="flex items-center mb-6">
                {section.icon}
                <h2 className="text-3xl font-serif text-pub-red">{section.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div key={itemIndex} variants={cardVariants}>
                    <Card className="glassmorphism-card h-full hover:shadow-xl transition-shadow duration-300 border-pub-red/20">
                      <CardHeader>
                        <CardTitle className="text-xl text-pub-dark-brown">{item.name}</CardTitle>
                        <CardDescription className="text-pub-gold font-semibold text-lg">{item.price}</CardDescription>
                      </CardHeader>
                      {item.description && (
                        <CardContent>
                          <p className="text-sm text-pub-dark-brown/80">{item.description}</p>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      );
    };

    export default MenuPage;
  