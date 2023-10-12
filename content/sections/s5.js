import React ,{ useState }  from "react";
import styled from 'styled-components';
import { Container } from "./style";

const S5 = () => {
    const [selectedValue, setSelectedValue] = useState('forest');


    const handleChange = (event) => {
    setSelectedValue(event.target.value);
    
    };
    const getImageSrc = () => {
    
        return imageSources[selectedValue];
    
    };
    const imageSources={
        forest:'forest.jpg',
        ocean:'ocean.jpg',
        mountain:'mountain.jpg',
        desert:'desert.jpg',
    };
    
    
   
    return (
        <Container >
            <Title>
                <h4>
                    Solution Here
                </h4>
                <p>Put the created component below this.</p>
                <FlexRow>
    
                    <FlexItem>
                            <SelectContainer>
                                <select id="dropdown" value={selectedValue}  onChange={handleChange}>
                                    
                                    <option value="forest">Forest</option>
                                    <option value="ocean">Ocean</option>
                                    <option value="mountain">Mountain</option>
                                    <option value="desert">Desert</option>
                                </select>
                            </SelectContainer>
                    </FlexItem>
                    <FlexItem>
                            <ImgContainer>
                                <img src={getImageSrc()} alt="Displayed Image" id="displayedImage"   />
                            </ImgContainer>
                            </FlexItem>
                
                </FlexRow>
                
            </Title>
            
        </Container>
    )
}


export default S5


const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
 

const QuestionsDiv= styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`


const FlexColumn = styled.div`
display:flex;
flex-direction:column;
justifyContent: 'center';
alignItems: 'center';
`
const FlexRow = styled.div`
display:flex;
flex-direction:row;
justifyContent: 'center'; 
alignItems: 'center'; 
`
const SelectContainer = styled.div`
    background: #DBE9FF;
    color: #333311;
    font-size: 20px;
    font-family: serif;
    font-weight: 700;
    align-items: center;
 `


const ImgContainer = styled.div`
 
`
const FlexItem = styled.div`
padding:80px;
background:#FFFFFF;
border: 1px #000000;
border-radius: 20px;
`