import styled from 'styled-components';

const LogForm = styled.div`
  .loginPage {
    background-image: url(./img/champ1.png);
    background-size: cover;
    padding-top: 80px;
    padding-bottom: 200px;
    height: 100vh;
    width: 100vw;
    .form {
      border-radius: 5px;
      width: 450px;
      margin: auto;
      margin-bottom: 80px;
      padding-bottom: 30px;
      background-color: #fff;
      box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
      .FarmConnectLogo {
        width: 300px;
        display: flex;
        justify-content: center;
        margin: auto;
      }
      .pLogin {
        margin-top: 20px;
        color: #223594;
        font-family: 'roboto', sans-serif;
        text-align: center;
      }
      .form-inner {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .LogInput {
          border: none;
          background-color: #ebecf0;
          font-family: 'roboto', sans-serif;
          font-size: 15px;
          width: 350px;
          height: 45px;
          opacity: 0.75;
          border-radius: 5px;
          padding-left: 10px;
          margin-bottom: 20px;
          outline-color: rgba(218, 218, 218, 0.25);
          :focus {
            outline-color: rgb(247, 143, 33, 0.75);
          }
        }
      }
      .BlocLoginSignIn {
        text-align: right;
        .pForgottenPassword {
          margin-top: 50px;
          color: #223594;
          font-family: 'roboto', sans-serif;
          font-weight: bold;
          text-align: right;
          font-size: 0.6em;
        }
        .pSignIn {
          cursor: pointer;
          border: none;
          color: #223594;
          font-family: 'roboto', sans-serif;
          font-weight: bold;
          text-align: right;
          font-size: 0.6em;
        }
        .buttonLogin {
          margin-top: 10px;
          margin-bottom: 10px;
          background-color: #f78f21;
          border: none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
          width: 350px;
          height: 45px;
        }

        .buttonLogin:hover,
        .buttonLogin:focus {
          cursor: pointer;
        }
      }
    }
  }
`;

export default LogForm;
