import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const MainSectionContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 2rem 5rem;
  background-color: ${(props) =>
    props.dark ? pallete.VeryDarkBlueForText : pallete.VeryLightGray};
  @media screen and (max-width: 960px) {
    align-items: center;
    padding: 2rem 0;
  }
`;

export const FoundCountriesContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  flex-wrap: wrap;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;
