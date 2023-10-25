import styled from '@emotion/styled';



export const Form = styled.form`
padding: 20px;
display: flex;
flex-direction: column;
width: 300px;
border: none;
margin-top: 20px;
margin-left: 20px;
`;

export const Title = styled.h1`
color: #413941;
margin-bottom: 30px`;

export const Text = styled.p`
font-size: 16px;
margin-bottom: 10px`


export const Input = styled.input`
display: inline-block;
border: none;
margin: 0 auto;
margin-bottom: 15px;
border-bottom: 1px solid #413941;
width: 250px;
 ::-webkit-input-placeholder {
  
}`

export const Wrapper = styled.label`
margin-bottom: 10px;`

export const Button = styled.button`
// margin: 0 auto;
color: white;
background-color: #413941;
border-radius: 15px;
padding: 10px 25px;
width: 150px;
display: flex;
justify-content: center;
align-items: center;
// width: 120px;
// height: 30px;
// padding: 5px;
// border-radius: 50px;
// background-color: yellow;
:hover{
    background-color: green
}`