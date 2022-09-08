import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  text-decoration: none;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  color: black;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Nav = () => {
  return (
      <Wrapper>
        <Left>
        <Link to='/'><Logo>LAMA.</Logo></Link>
        </Left>
        <Right>
        <Link to="/"><MenuItem>HOME</MenuItem></Link>
        <Link to="/about"><MenuItem>ABOUT</MenuItem></Link>
        <Link to="/productList"><MenuItem>PRODUCTS</MenuItem></Link>
        <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
        <Link to="/login"><MenuItem>LOG IN</MenuItem></Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
  );
};

export default Nav;

