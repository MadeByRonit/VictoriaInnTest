
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import MenuPage from '@/pages/MenuPage';
    import AboutPage from '@/pages/AboutPage';
    import GalleryPage from '@/pages/GalleryPage';
    import ContactPage from '@/pages/ContactPage';
    import EventsNewsPage from '@/pages/EventsNewsPage';
    import { Toaster } from '@/components/ui/toaster';

    function App() {
      return (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/events-news" element={<EventsNewsPage />} />
            </Routes>
          </Layout>
          <Toaster />
        </Router>
      );
    }

    export default App;
  