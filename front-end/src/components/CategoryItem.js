import { Link } from 'react-router-dom';
import { Container, Info, Image, Title, Button } from '../styles/Components/CategoryItem';


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/product/${item.cat}`}>
          <Image src={item.img} />
          <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
          </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem;