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
  border-bottom: 1px solid
    ${(props) =>
      props.dark
        ? pallete.VeryLightGrayTransparent
        : pallete.DarkBlueTransparent};
  @media screen and (max-width: 960px) {
    padding: 0 1rem;
    h1 {
      font-size: 1.2rem;
    }
  }
`;
export const ModeContainer = styled.p`
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  gap: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.dark ? pallete.White : pallete.VeryDarkBlue};
    color: ${(props) =>
      props.dark ? pallete.VeryDarkBlueForText : pallete.White};
  }
`;
