import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  // margin-left: 50px;
`;

export const List = styled.ul`
  width: 280px;
  height: auto;
  border-left: 1px solid grey;
`;

export const Item = styled.li`
  border-radius: 0px 100px 100px 0px;
  padding: 10px;

  &:nth-of-type(2n) {
    background-color: #413941;
    color: white;
  }
`;
export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 12px;
  width: 90px;
  padding: 10px;
  background-color: #c9e913;
  color: white;
  border-radius: 50%;
  :hover {
    background-color: #f1f692;
    color: #413941;
  }
`;
