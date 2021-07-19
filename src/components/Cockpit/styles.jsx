import styled from 'styled-components';

const StyledCockpit = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }
  .cockpit {
    width: 100vw;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    font-family: 'roboto', sans-serif;
    .beta {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 30px;
      padding-top: 30px;
      width: 80vw;
      border-radius: 3px;
      background-color: #ffff;
      box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
      p {
        margin: 5px;
      }
      .contactButton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        margin-top: 20px;
        margin-bottom: 25px;
        color: #ffff;
        background-color: rgb(247, 143, 33, 0.75);
        border: solid 1px rgb(247, 143, 33, 0.75);
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        text-decoration: none;
      }
    }
    .container {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
      width: 80vw;
      height: 60vh;
      .profil {
        width: 25vw;
        margin-bottom: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        border-radius: 5px;
        background-color: #ffff;
        box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
        .titleProfile {
          color: #223594;
          margin-top: 30px;
          font-size: 30px;
        }
        .completed {
          padding-top: 50px;
          color: rgba(70, 70, 70, 1);
        }
        .notCompleted {
          padding-top: 50px;
          color: red;
        }
        .contactButtonProfil {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
          height: 50px;
          margin-top: 10px;
          margin-bottom: 25px;
          color: #ffff;
          background-color: rgb(247, 143, 33, 0.75);
          border: solid 1px rgb(247, 143, 33, 0.75);
          border-radius: 5px;
          cursor: pointer;
          font-size: 15px;
          text-decoration: none;
        }
      }
      .myapps {
        width: 25vw;
        margin-bottom: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        border-radius: 5px;
        background-color: #ffff;
        box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
        .titleMyApps {
          color: #223594;
          font-size: 30px;
          margin-top: 30px;
        }
        .completed {
          padding-top: 50px;
          color: rgba(70, 70, 70, 1);
        }
        .notCompleted {
          padding-top: 50px;
          color: red;
        }
        .contactButtonApp {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
          height: 50px;
          margin-top: 10px;
          margin-bottom: 25px;
          color: #ffff;
          background-color: rgb(247, 143, 33, 0.75);
          border: solid 1px rgb(247, 143, 33, 0.75);
          border-radius: 5px;
          cursor: pointer;
          font-size: 15px;
          text-decoration: none;
        }
      }
      .news {
        width: 25vw;
        margin-bottom: 35px;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 5px;
        background-color: #ffff;
        box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
        .titleNews {
          color: #223594;
          font-size: 30px;
          margin-top: 30px;
        }
        .newsText {
          padding-top: 50px;
          color: rgba(70, 70, 70, 1);
        }
      }
    }
  }
`;

export default StyledCockpit;
