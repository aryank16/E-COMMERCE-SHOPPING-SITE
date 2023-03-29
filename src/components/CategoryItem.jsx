import styled  from 'styled-components'
import { mobile } from '../pages/Responsive';




const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
text:bold;
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height: "20vh"})}
`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title = styled.div`
font-weight:700;
font-size:50px;
`;
const Button = styled.button`
border:1px solid;
`


const CategoryItem = ({item}) => {
  return (
    <Container>

        <Image src={item.img}/>

        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
     
     


    </Container>
  )
}

export default CategoryItem