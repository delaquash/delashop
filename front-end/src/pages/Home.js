import { Announcement, Footer, Navbar, Newletter, Slider, Products, Categories }  from '../index.jsx';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newletter />
        <Footer />
    </div>
  )
}

export default Home;