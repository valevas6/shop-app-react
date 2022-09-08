import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const LinkSocial = styled.a`
  color: white;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <LinkSocial target="_blank" without rel="noreferrer" href="https://www.facebook.com"><Facebook /></LinkSocial>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <LinkSocial target="_blank" without rel="noreferrer" href="https://www.instagram.com"><Instagram /></LinkSocial>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LinkSocial target="_blank" without rel="noreferrer" href="https://www.twitter.com"><Twitter /></LinkSocial>
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkSocial target="_blank" without rel="noreferrer" href="https://www.pinterest.com"><Pinterest /></LinkSocial>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to='/'>Home</Link></ListItem>
          <ListItem>Cart</ListItem>
          <ListItem><Link to='/productList'>Products</Link></ListItem>
          <ListItem><Link to='/about'>About</Link></ListItem>
          <ListItem><Link to='/register'>Register</Link></ListItem>
          <ListItem><Link to='/login'>Log in</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> <a href="tel:+4733378901">+1 234 56 78</a>
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> <a href="mailto:contact@lama.dev">contact@lama.dev</a>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
