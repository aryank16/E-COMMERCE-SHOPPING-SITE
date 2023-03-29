import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from './Responsive';






const Container = styled.div``;
const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display:flex; 
justify-content:space-between;
`;
const Filter = styled.div`
margin: 20px;
${mobile({width:"0px 20px", display:"flex", flexDirection:"column"})}
`;

const FilterText= styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}
`;
const Option = styled.option``


const ProductList = () => {
  return (

    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>

                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
                

            </Select>
            <Select>
            <Option disabled selected>
                    Size
                </Option>

                <Option>S</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                


            </Select>
            
                </Filter>

                <Filter>
                <FilterText>Sort Products:</FilterText>

                <Select>
                <Option disabled selected>
                    Newest 
                </Option>

                <Option>Price</Option>
                <Option>Popular</Option>
                <Option>oldest</Option>
                
                </Select>
                </Filter>

        </FilterContainer>

        <Products/>

        <Newsletter/>
        <Footer/>

    </Container>

  )
}

export default ProductList