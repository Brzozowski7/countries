import styled from "styled-components";
import { Link } from "react-router-dom";
import { pallete } from "../../misc/pallete";

export const CountryPageWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2rem 5rem;
  background-color: ${(props) =>
    props.dark ? pallete.VeryDarkBlue : pallete.VeryLightGray};
  color: ${(props) => (props.dark ? pallete.White : pallete.DarkBlue)};
  @media screen and (max-width: 960px) {
    gap: 2rem;
    padding: 2rem;
  }
`;
export const FlagContainer = styled.div`
  img {
    height: 18rem;
    width: 30rem;
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
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 0;
  }
`;

export const StyledLink = styled(Link)`
  width: 8rem;
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
