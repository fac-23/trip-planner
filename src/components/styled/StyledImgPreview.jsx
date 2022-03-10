import styled from "styled-components";

const StyledImgPreview = styled.img`
  width: 100%;
  max-width: 90%;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 860px) {
    max-width: 70%;
  }
`;

export default StyledImgPreview;
