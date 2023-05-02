import { useEffect, useState } from 'react';
import Announcement from '../components/Announcement.jsx';
import Navbar from '../components/Navbar.jsx';
import Newletter from '../components/Newletter.jsx';
import Slider from '../components/Slider.jsx';
import Products from '../components/Products.jsx';
import Categories from '../components/Categories.jsx';
import Footer from '../components/Footer.jsx';

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