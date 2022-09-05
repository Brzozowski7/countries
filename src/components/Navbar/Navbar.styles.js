import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 6rem;
  background-color: ${(props) =>
    props.dark ? pallete.DarkBlue : pallete.White};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props) =>
    props.dark ? pallete.White : pallete.VeryDarkBlueForText};
  padding: 0 5rem;
`;
export const ModeContainer = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight:600;
  gap: 1rem;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.dark ? pallete.White : pallete.VeryDarkBlue};
    color: ${(props) =>
      props.dark ? pallete.VeryDarkBlueForText : pallete.White};
`;
