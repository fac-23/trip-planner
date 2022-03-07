import styled from "styled-components";

const StyledTripCard = styled.div`
  background-color: var(--color-light-grey);
  border: none;
  border-radius: 10px;
  box-shadow: 1px 4px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 260px;
  position: relative;

  :hover {
    transform: scale(1.02);
    box-shadow: 1px 4px 7px rgba(0, 0, 0, 0.4);
  }

  .trip__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .trip__cityName {
    font-weight: 500;
  }

  .trip__dates {
    font-size: 0.8rem;
    font-weight: 300;
  }

  .trip__image--container {
    width: 60px;
    height: 60px;
  }

  .trip__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
  }
`;

export default StyledTripCard;
