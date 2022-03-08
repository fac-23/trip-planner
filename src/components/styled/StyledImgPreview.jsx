import styled from "styled-components";

const StyledImgPreview = styled.img`
  width: 100%;
  max-width: 90%;

  @media screen and (max-width: 860px) {
    max-width: 70%;
  }
`;

export default StyledImgPreview;
