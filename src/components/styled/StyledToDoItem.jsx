import styled from "styled-components";

const StyledToDoItem = styled.div`
  margin-top: 30px;

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  input[type="text"] {
    border: transparent;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 18px;
    width: 100%;
  }

  input[type="checkbox"] {
    height: 18px;
    width: 18px;
  }

  .input-container {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .btn-container {
    display: flex;
    align-items: center;
  }

  button {
    margin-left: 12px;
  }

  .to-do__delete-btn--icon {
    width: 20px;
  }

  .save-edit-btn {
    border: 1px solid black;
    height: 25px;
    width: 40px;
    margin-bottom: 2px;
    border-radius: 5px;
  }

  .save {
    background-color: var(--color-primary-light);
  }

  .edit {
    background-color: #fac248;
  }
`;

export default StyledToDoItem;
