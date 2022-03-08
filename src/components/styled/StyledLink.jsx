import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  background-color: #f4f4f4;
  border: none;
  text-decoration: none;
  border-radius: 10px;
  padding: 0.5rem;
  box-shadow: 1px 4px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: 5px solid #f4f4f4;
  transition: border 0.2s, transform 0.2s, box-shadow 0.2s;
  min-width: 280px;
  text-align: center;
  color: #333;

  :hover {
    border: 5px solid #00b9ad;
    transform: scale(1.02);
    box-shadow: 1px 4px 7px rgba(0, 0, 0, 0.4);
  }
`;

export default StyledLink;
