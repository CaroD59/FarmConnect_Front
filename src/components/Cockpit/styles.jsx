import styled from 'styled-components';

const StyledCockpit = styled.div`
  .cockpit {
    width: 100vw;
    height: 80vh;
    padding-top: 5vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background-color: rgba(218, 218, 218, 0.25);
    font-family: 'roboto', sans-serif;
    .beta {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 5vh;
      padding-top: 20px;
      width: 80vw;
      height: 100px;
      border-radius: 3px;
      background-color: #ffff;
      p {
        margin: 5px;
      }
      .contactButton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        margin-top: 10px;
        margin-bottom: 15px;
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
      width: 80vw;
      height: 40vh;
      .profil {
        width: 25vw;
        margin: 25px 0px 25px 0px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        border-radius: 5px;
        background-color: #ffff;
        .titleProfile {
          color: #223594;
          font-size: 30px;
        }
        .completed {
          color: green;
        }
        .notCompleted {
          color: red;
        }
        .contactButtonProfil {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
          height: 50px;
          margin-top: 10px;
          margin-bottom: 15px;
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
        margin: 25px 0px 25px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: orange 1px solid;
        border-radius: 5px;
        background-color: #ffff;
      }
      .soon {
        width: 25vw;
        margin: 25px 0px 25px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: purple 1px solid;
        border-radius: 5px;
        background-color: #ffff;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .cockpit {
      height: 100vh;
      .beta {
        text-align: center;
        height: 190px;
        margin-bottom: 26px;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 78vw;
        height: 300vh;
        .profil {
          height: 200px;
          width: 614.4px;
        }
        .soon {
          height: 200px;
          width: 614.4px;
        }
        .myapps {
          height: 200px;
          width: 614.4px;
        }
      }
    }
  }
  @media screen and (max-width: 376px) {
    .cockpit {
      height: 130vh;
      width: 100%;
      .beta {
        height: 150px;
        margin-bottom: 26px;
        font-size: 70%;
        width: 250px;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80vw;
        height: 100vh;

        .profil {
          height: 150px;
          width: 250px;
          font-size: 80%;
          .titleProfile {
            font-size: 18px;
          }
          .contactButtonProfil {
            text-align: center;
            font-size: 10px;
            width: 152px;
          }
        }
        .soon {
          height: 150px;
          width: 250px;
        }
        .myapps {
          height: 150px;
          width: 250px;
        }
      }
    }
  }
`;

export default StyledCockpit;
