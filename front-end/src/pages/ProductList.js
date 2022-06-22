import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newletter from '../components/Newletter';
import Products from '../components/Products';
import { Container, Title, FilterContainer, Filter } from '../styles/pages/ProductList';

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                Filter
            </Filter>
        </FilterContainer>
        <Products />
        <Newletter />
        <Footer />
    </Container>
  )
}

export default ProductList