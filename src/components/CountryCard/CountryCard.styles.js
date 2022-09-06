import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${(props) =>
    props.dark ? pallete.DarkBlue : pallete.White};
  color: ${(props) => (props.dark ? pallete.White : pallete.VeryDarkBlue)};
  box-shadow: ${(props) =>
    props.dark
      ? `${pallete.DarkBlue} 0px 5px 15px`
      : `${pallete.VeryDarkBlue} 0px 5px 15px`};
  &:hover {
    cursor: pointer;
    scale: 1.05;
    transition: 0.5s ease-in-out;
  }
`;
export const FlagContainer = styled.div`
  width: 100%;
  height: 15rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const InformationContainer = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  align-items: left;
  padding: 1rem 2rem 2rem;
  border-top: 1px solid
    ${(props) =>
      props.dark
        ? pallete.VeryLightGrayTransparent
        : pallete.DarkBlueTransparent};
  h2 {
    height: 5rem;
    display: flex;
    align-items: center;
  }
`;
