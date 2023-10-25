import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
padding :30px;
`

export const Form = styled.form`
border: 5px solid;
width: 350px;
heigt: auto;
margin: 0 auto;
border-image-source:linear-gradient(90deg, rgba(193,194,185,1) 0%, rgba(150,236,220,1) 24%, rgba(241,246,146,1) 61%, rgba(223,158,222,1) 91%);;
border-image-slice: 1;
display: flex;
padding-top: 20px;
padding-bottom: 30px;
flex-direction: column;
gap: 20px;
-webkit-box-shadow: -1px -13px 137px -14px rgba(242,238,114,1);
-moz-box-shadow: -1px -13px 137px -14px rgba(242,238,114,1);
box-shadow: -1px -13px 137px -14px rgba(242,238,114,1);

`
export const Title = styled.h3`
padding-bottom: 50px;
color: #413941;
text-align: center;`
export const Input = styled.input`
display: inline-block;
border: none;
margin: 0 auto;
margin-bottom: 15px;
border-bottom: 1px solid #413941;
width: 250px;
 ::-webkit-input-placeholder {
  
}`

export const Label = styled.label`
padding-top: 10px;
text-align: center;`

export const Button = styled.button`
margin: 0 auto;
color: white;
background-color: #413941;
border-radius: 15px;
padding: 10px 25px;
width: 150px;
display: flex;
justify-content: center;
align-items: center;

`

