import styled from "styled-components";

export const GripTemplate = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Img = styled.img`
  padding: 10px;
  width: 40%;
  display: block;
  margin: auto;
`;

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin: 10px;
  width: 300px;
  img {
    border-radius: 15px 15px 0 0;
    width: 300px;
    padding: 0;
    margin: 0;
  }
`;

export const CardBody = styled.div`
  padding: 5px 0 0px 30px;
  overflow: auto;
    h1 {
      margin 0;
    }
    h3{
      margin 0;
      padding-bottom: 20px;
      color: #808080;
    }
`;

export const Search = styled.input`
  width: 240px;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  padding: 17px;
  margin-right: 10px;
  border: 1px solid #808080;
  @media screen and (max-width: 768px) {
    width: 75%;
    margin: 0 0 10px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


