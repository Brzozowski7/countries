import styled from "styled-components";

export const NameAndDetails = styled.div`
  display: flex;
  flex-direction: column;
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
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
