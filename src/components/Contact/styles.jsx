import styled from 'styled-components';

const StyledContact = styled.div`
  .loginPage {
    background-image: url(./img/welcomefont.png);
    background-size: cover;
    width: 100vw;
    height: 700px;
  }
  .FarmConnectLogo {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .buttonLogin {
    margin-top: 10px;
    background-color: #f78f21;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    width: 350px;
    height: 45px;
  }
  .form {
    margin-top: 20px;
    color: #223594;
    font-family: 'roboto', sans-serif;
    font-weight: bold;
    line-height: 0%;
    text-align: center;
  }
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
  .BlocLoginSignIn {
    text-align: right;
  }
  .buttonLogin:hover,
  .buttonLogin:focus {
    cursor: pointer;
  }
  .form-inner {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ContactInput {
    border: none;
    background-color: #ebecf0;
    font-family: 'roboto', sans-serif;
    letter-spacing: -0.2px;
    font-size: 15px;
    width: 350px;
    height: 45px;
    opacity: 0.5;
  }
  .LogInput:focus,
  .LogInput:hover {
    outline: none;
  }
  ::placeholder {
    opacity: 1;
  }

  .pContact {
    margin-top: 20px;
    color: #223594;
    font-family: 'roboto', sans-serif;
    font-weight: bold;
    line-height: 0%;
    text-align: center;
  }
  .Button {
    display: flex;
    justify-content: center;

    .buttonContact {
      margin-top: 10px;
      background-color: #f78f21;
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      width: 350px;
      height: 45px;
      cursor: pointer;
    }
  }

  .RGPD {
    display: flex;
    justify-content: center;
  }

  .accroche {
    text-align: center;
  }

    .inactive {
      margin-top: 10px;
      background-color: #33752d;
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      width: 350px;
      height: 45px;
      cursor: pointer;
      }
    }
  }
`;

export default StyledContact;
