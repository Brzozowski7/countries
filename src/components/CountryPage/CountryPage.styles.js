import styled from "styled-components";
import { Link } from "react-router-dom";
import { pallete } from "../../misc/pallete";

export const CountryPageWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  padding: 2rem 5rem;
  background-color: ${(props) =>
    props.dark ? pallete.VeryDarkBlue : pallete.VeryLightGray};
  @media screen and (max-width: 960px) {
    gap: 2rem;
    padding: 2rem;
  }
`;
export const FlagContainer = styled.div`
  img {
    height: 20rem;
    width: 35rem;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    img {
      height: 15rem;
      width: 100%;
    }
  }
`;

export const CountryInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 0;
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  h1 {
    padding: 1rem 0;
  }
  p {
    padding: 0.5rem 0;
  }
`;

export const BorderCountriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const BaseLink = styled(Link)`
  background-color: ${(props) =>
    props.dark ? pallete.DarkBlue : pallete.White};
  color: ${(props) => (props.dark ? pallete.White : pallete.DarkBlue)};
  font-weight: 800;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  box-shadow: ${(props) =>
    props.dark
      ? `${pallete.DarkGray} 0px 3px 3px`
      : `${pallete.VeryDarkBlue} 0px 3px 3px`};
`;
export const StyledLink = styled(BaseLink)`
  width: 8rem;
`;

export const BorderCountryLink = styled(BaseLink)`
  width: 4rem;
`;
