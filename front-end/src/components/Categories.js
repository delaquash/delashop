import { styled } from "@material-ui/core";
import { categories } from "../data";
import { Container } from "../styles/Categories";
import { CategoryItem } from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
        {Categories.map((item)=> (
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories
