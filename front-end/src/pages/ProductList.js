import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newletter from '../components/Newletter';
import Products from '../components/Products';
import { Container, Title, FilterContainer, Filter, FilterText } from '../styles/pages/ProductList';

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Product
                </FilterText>
            </Filter>
            <Filter>
            <FilterText>
                    Sort Product
                </FilterText>
            </Filter>

        </FilterContainer>
        <Products />
        <Newletter />
        <Footer />
    </Container>
  )
}

export default ProductList