import styled from "styled-components";
import { HiChevronLeft } from "react-icons/hi";

export const GoHackIcon = styled(HiChevronLeft)`
  display: flex;
  font-size: 60px;
`;

export const Container = styled.div`
  margin-top: 75px;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
    margin: 0;
    padding-top: 10px;
  }
`;
export const Informations = styled.div`
  margin: 50px;
  padding: 10px;
  width: 100%;
  @media (max-width: 768px) {
    width: auto;
  }
  h1 {
    font-size: 17px;
    font-weight: bold;
    margin: 0;
  }
  p{
    margin: 4px 0 5px 2px;
    color: #808080;
  }
`;
