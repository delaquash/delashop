import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Announcement from '../components/Announcement.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import Newletter from '../components/Newletter.js';
import Products from '../components/Products.js';
import { Container, Title, FilterContainer, Filter, FilterText, Select, Option } from '../styles/pages/ProductList';

const ProductList = () => {
    /* Getting the category from the url. */
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const [filters, setFilters] = useState({})
    const [sorts, setSorts] = useState("newest");
    const handleOnchange= (e) => {
        const val = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: val,
        })
    }
    console.log(filters);
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
                <Select name="color" onChange={handleOnchange}>
                    <Option  disabled>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Gray</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name="size"  onChange={handleOnchange}>
                    <Option disabled>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Product
                </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price(asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newletter />
        <Footer />
    </Container>
  )
}

export default ProductList;