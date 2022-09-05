import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const SearchBarContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.dark ? pallete.DarkBlue : pallete.White};
  color: ${(props) => (props.dark ? pallete.White : pallete.VeryDarkBlue)};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  box-shadow: ${(props) =>
    props.dark
      ? `${pallete.VeryLightGray} 0px 3px 3px`
      : `${pallete.VeryDarkBlue} 0px 3px 3px`};
`;
export const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1.2rem;
  color: ${(props) => (props.dark ? pallete.White : pallete.VeryDarkBlue)};
  background-color: ${(props) =>
    props.dark ? pallete.DarkBlue : pallete.White};
  &:focus {
    outline: none;
  }
`;
