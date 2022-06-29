import { FavoriteBorderOutlined, ShoppingCartOutlined, SearchOutlined } from "@material-ui/icons"
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
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product;