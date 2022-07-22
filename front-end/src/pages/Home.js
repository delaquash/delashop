import { useEffect, useState } from 'react';
import Announcement from '../components/Announcement.js';
import Navbar from '../components/Navbar.js';
import Newletter from '../components/Newletter.js';
import Slider from '../components/Slider.js';
import Products from '../components/Products.js';
import Categories from '../components/Categories.js';
import Footer from '../components/Footer.js';

const Home = () => {
  const [scrolling, setScrolling ] = useState(false);
    const handleScrolling =() => {
    (window.pageYOffset >= 168 ? setScrolling(true) : setScrolling(false));
  }

  useEffect(() => {
    window.addEventListener("scrolling", handleScrolling);
    return () => window.addEventListener("scroll", handleScrolling);
  });
  return (
    <div>
        <Announcement />
        <Navbar 
            scrolling={scrolling}
        />
        <Slider />
        <Categories />
        <Products />
        <Newletter />
        <Footer />
    </div>
  )
}

export default Home;