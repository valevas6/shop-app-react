import styled from "styled-components";
import { allProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (props) => {
  return (
    <Container>
        {allProducts.map((item) => (
          item.category === props.type  || props.type === 'all-products'
            ? (<Product item={item} key={item.id} />)
            : null
        ))}
    </Container>
  );
};

export default Products;
