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
`;

export default StyledCockpit;
