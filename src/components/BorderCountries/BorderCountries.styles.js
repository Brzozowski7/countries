import styled from "styled-components";
import { Link } from "react-router-dom";
import { pallete } from "../../misc/pallete";

export const BorderCountriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;
export const BorderCountryLink = styled(Link)`
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
