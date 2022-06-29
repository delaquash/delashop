
import { categories } from "../data";
import { Container } from "../styles/Components/Categories";
import  CategoryItem  from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
        {categories.map((item)=> (
            <CategoryItem item={item}  key={item.id} />
        ))}
    </Container>
  )
}

export default Categories
