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
                <Select onChange={(e)=> setSorts(e.target.value)}>
                    <Option value="newest" >Newest</Option>
                    <Option value="asc">Price(asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sorts={sorts}/>
        <Newletter />
        <Footer />
    </Container>
  )
}

export default ProductList;