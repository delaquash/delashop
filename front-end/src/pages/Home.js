import { useEffect, useState } from 'react';
import { Announcement, Footer, Navbar, Newletter, Slider, Products, Categories }  from '../index.jsx';

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
        <Navbar scrolling={scrolling}/>
        <Slider />
        <Categories />
        <Products />
        <Newletter />
        <Footer />
    </div>
  )
}

export default Home;