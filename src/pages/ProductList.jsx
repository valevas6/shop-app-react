import React, {useState} from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { allProducts } from "../data";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

function filterFormat(str) {
  let word = str.replace(/-/g, ' ');
  return word.charAt(0).toUpperCase() + word.slice(1);
}

let options = [];
allProducts.forEach((item) => {
    if (!options.includes(item.category)) {
      options.push(item.category);
    }
});

const ProductList = () => {
  const [selects, setSelects] = useState('all-products');
  return (
    <Container>
      <Announcement />
      <Title>{filterFormat(selects)}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select value={selects} onChange={e=>setSelects(e.target.value)}>
            <Option value='all-products' key='all-products'>
              All Products
            </Option>
            {options.map((item) => (
              <Option value={item} key={item}>{filterFormat(item)}</Option>
            ))}
          </Select>
        </Filter>
      </FilterContainer>
      <Products type={selects}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
