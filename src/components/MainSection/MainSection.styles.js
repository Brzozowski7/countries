import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const MainSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.dark ? pallete.VeryDarkBlueForText : pallete.VeryLightGray};
`;
