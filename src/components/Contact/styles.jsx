import styled from 'styled-components';

const StyledContact = styled.div`
  .ContactPage {
    background-image: url(./img/welcomefont.png);
    background-size: cover;
    width: 100vw;
    height: 780px;
    .form {
      background-color: #fff;
      margin: 0;
      border-radius: 20px;
      width: 450px;
      height: 690px;
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
      .pContact {
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
        .form-groupe {
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
          .ContactMessage {
            border: none;
            background-color: #ebecf0;
            font-family: 'roboto', sans-serif;
            letter-spacing: -0.2px;
            font-size: 15px;
            width: 350px;
            height: 100px;
            opacity: 0.5;
          }

          .ContactInput:focus,
          .ContactInput:hover {
            outline: none;
          }
          .ContactMessage:focus,
          .ContactMessage:hover {
            outline: none;
          }

          ::placeholder {
            opacity: 1;
          }
        }
        .Button {
          button {
            margin-top: 10px;
            background-color: #f78f21;
            border: none;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            width: 350px;
            height: 45px;
          }

          button:hover,
          button:focus {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default StyledContact;
