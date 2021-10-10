import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin: 10px;
  cursor: pointer;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
      margin:30px 10px 5px 10px;
  }
  p{
    margin:0 0 30px 0;
  }
`;

export const Nobody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;