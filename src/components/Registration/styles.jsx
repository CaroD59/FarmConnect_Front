import styled from 'styled-components';

const LogForm = styled.div`
  .registrationPage {
    background-image: url(./img/welcomefont.png);
    background-size: cover;
    width: 100vw;
    height: 700px;
    .form {
      background-color: #fff;
      margin: 0;
      border-radius: 20px;
      width: 450px;
      height: 550px;
      display: block;
      margin: auto;
      position: relative;
      top: 50px;
      background-color: white;
      margin-bottom: 150px;

      .FarmConnectLogo {
        width: 300px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .title {
        margin-top: 20px;
        color: #223594;
        font-family: 'roboto', sans-serif;
        font-weight: bold;
        line-height: 0%;
        text-align: center;
      }
      .form-inner {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .buttonRegistration {
          margin-top: 10px;
          background-color: #f78f21;
          border: none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
          width: 350px;
          height: 45px;
        }

        .buttonRegistration:hover,
        .buttonRegistration:focus {
          cursor: pointer;
        }

        .RegistrationInput {
          border: none;
          background-color: #ebecf0;
          font-family: 'roboto', sans-serif;
          letter-spacing: -0.2px;
          font-size: 15px;
          width: 350px;
          height: 45px;
          opacity: 0.5;
        }

        .RegistrationInput:focus,
        .RegistrationInput:hover {
          outline: none;
        }

        ::placeholder {
          opacity: 1;
        }
      }
    }
  }
`;

export default LogForm;
