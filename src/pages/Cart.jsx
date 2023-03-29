import styled from 'styled-components';
import React from 'react'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { mobile } from './Responsive';




const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
${mobile({padding:"10px"})}
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
  padding  :10px ;
  font-weight: 600;
  cursor: pointer;
  border: ${(props)=>props.type === "filled" && "none"};

  background-color: ${(props) =>
props.type === "filled" ? "black" : "transparent"};

color: ${(props) => props.type === "filled" && "white"};

`;

const TopText = styled.div`
${mobile({display:"none"})}
`;
const TopTexts = styled.span`
 text-decoration: underline;
 cursor: pointer;
 margin: 0px 10px;

`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}

`;
const Info = styled.div`
flex:3;

`;


const Product = styled.div`

display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
      
`;

const ProductDetail = styled.div`

flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`

width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color} ;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex: 1;
`;

const ProductAmountContainer = styled.div`

display:flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`

font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;

`;

const hr = styled.div`
background-color: #eee;
border: none;
height: 1px;
`;
    

const Summary = styled.div`
flex: 1;
border:0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;

`;

const SummaryTitle = styled.h1`
font-weight: 200;

`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};

`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;

`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>


                </TopTexts>

                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="\new\sneakers.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>97678766565977</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>9</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs.7999</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <hr></hr>
                    <Product>
                        <ProductDetail>
                            <Image src="\new\top.webp"/>
                            <Details>
                                <ProductName><b>Product:</b>HYKEN TOP</ProductName>
                                <ProductId><b>ID:</b>9767345565977</ProductId>
                                <ProductColor color="BABY PINK"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs.1899</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemText>Rs.9898</SummaryItemText>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemText>Rs.199</SummaryItemText>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemText>-Rs.199</SummaryItemText>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemText>Rs.9898</SummaryItemText>
                    </SummaryItem>

                    <Button>CHECKOUT NOW</Button>

                    
                </Summary>
                 </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  );
};

export default Cart