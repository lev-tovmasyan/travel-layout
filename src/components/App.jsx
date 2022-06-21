import React from 'react';
import Packages from './BestPackages/Packages';
import BookSection from './BookSection/BookSection';
import Cover from './Cover/Cover';
import Destinations from './Destinations/Destinations';
import Footer from './Footer/Footer';
import Services from './OurServices/Services';
import Reviews from './ReviewsAboutUs/Reviews';
import ServiceStatistics from './ServiceStatistics/ServiceStatistics';
import Subscribe from './Subscribe/Subscribe';

const App = () => (
  <div>
    <Cover />
    <Services />
    <ServiceStatistics />
    <Destinations />
    <Packages />
    <BookSection />
    <Reviews />
    <Subscribe />
    <Footer />
  </div>
);

export default App;
