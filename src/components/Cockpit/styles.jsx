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
      }
    }
    .container {
      display: flex;
      justify-content: space-between;
      height: 40vh;
      .profil {
        width: 20vw;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: yellowgreen 1px solid;
        border-radius: 5px;
        background-color: #ffff;
      }
      .myapps {
        width: 20vw;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: orange 1px solid;
        border-radius: 5px;
        background-color: #ffff;
      }
      .soon {
        width: 20vw;
        margin: 20px;
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
