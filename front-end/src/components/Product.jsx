
import { FavoriteBorderOutlined, ShoppingCartOutlined, SearchOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom";
import { Container, Icon, Info, Circle, Image } from "../styles/Components/Product";

const Product = ({item}) => {
  return (
    <Container> 
        <Circle />
        <Image 
            src={item.img}
        />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product;