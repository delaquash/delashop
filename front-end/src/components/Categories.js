
import { categories } from "../data";
import { Container } from "../styles/Categories";
import  CategoryItem  from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
        {categories.map((item)=> (
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories
