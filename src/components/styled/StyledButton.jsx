import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-primary-light);
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
  max-width: 300px;
  box-shadow: 1px 4px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;

  :hover {
    transform: scale(1.02);
    box-shadow: 1px 4px 7px rgba(0, 0, 0, 0.4);
  }
`;

export default StyledButton;
