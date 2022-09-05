import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const CountryContainer = styled.div`
  width: 18rem;
  background-color: ${(props) =>
    props.dark ? pallete.DarkBlue : pallete.White};
  color: ${(props) => (props.dark ? pallete.White : pallete.VeryDarkBlue)};
`;
export const FlagContainer = styled.div`
  width: 100%;
  height: 13rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: left;
  padding: 1rem 2rem 2rem;
  border-top: 1px solid
    ${(props) =>
      props.dark
        ? pallete.VeryLightGrayTransparent
        : pallete.DarkBlueTransparent};
`;
