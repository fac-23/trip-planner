import styled from "styled-components";

const StyledTripCard = styled.div`
  background-color: var(--color-light-grey);
  border: none;
  border-radius: 10px;
  box-shadow: 1px 4px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 260px;

  :hover {
    transform: scale(1.02);
    box-shadow: 1px 4px 7px rgba(0, 0, 0, 0.4);
  }

  a {
    display: flex;
    gap: 0.8rem;
  }

  .trip__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 1rem 0.5rem 0;
  }

  .trip__cityName {
    font-weight: 500;
    font-size: 1.1rem;
  }

  .trip__delete-btn {
    border: none;
    background: none;
    padding: 0 1rem;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    transition: background, 0.3s;
  }

  .trip__delete-btn:hover {
    background: var(--color-primary-light);
  }

  .trip__delete-btn--icon {
    width: 20px;
  }

  .trip__dates {
    font-weight: 300;
    font-size: 0.9rem;
  }

  .trip__countdown {
    font-size: 0.9rem;
  }

  .trip__image--container {
    max-width: 70px;
    flex: 1 1 auto;
  }

  .trip__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
  }
`;

export default StyledTripCard;
