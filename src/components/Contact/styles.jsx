import styled from 'styled-components';

const StyledContact = styled.div`
  form {
    width: 40vw;
    height: 300px;
    margin: auto;
    margin-top: 100px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: grey;
    label {
      input {
        width: 50%;
      }
    }
  }
`;

export default StyledContact;
