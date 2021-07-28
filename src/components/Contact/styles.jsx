import styled from 'styled-components';

const StyledContact = styled.div`
  font-family: 'roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  .ContactPage {
    box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
    padding: 50px;
    border-radius: 5px;
    background-color: #ffff;
    .contactTitle {
      color: #223594;
      font-size: 44px;
      font-weight: 300;
      padding-bottom: 20px;
    }
    .form-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      .form-groupe {
      }
      .ContactInput {
        height: 30px;
        width: 400px;
        margin-bottom: 20px;
        padding-left: 10px;
        border: none;
        opacity: 0.75;
        border-radius: 5px;
        background-color: #ebecf0;
        outline-color: rgba(218, 218, 218, 0.25);
        :focus {
          outline-color: rgb(247, 143, 33, 0.75);
        }
      }
      .ContactMessage {
        height: 200px;
        width: 400px;
        font-family: 'roboto', sans-serif;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-top: 10px;
        outline-color: rgba(218, 218, 218, 0.25);
        outline-width: 1px;
        border: none;
        opacity: 0.75;
        border-radius: 5px;
        background-color: #ebecf0;
        :focus {
          outline-color: rgb(247, 143, 33, 0.75);
        }
      }
    }
    .secondBloc {
    }
    .RGPD {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      .FarmConnectInfos {
        margin: auto;
        font-size: 15px;
        color: rgba(70, 70, 70, 1);
      }
    }
    .Button {
      margin: auto;
      .buttonContact {
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: #f78f21;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        width: 400px;
        height: 45px;
        cursor: pointer;
      }
    }
  }
`;

export default StyledContact;
