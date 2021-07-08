import styled from 'styled-components';

const StyledCockpit = styled.div`
  .cockpit {
    width: 100vw;
    height: 80vh;
    border: black 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(218, 218, 218, 0.25);
    font-family: 'roboto', sans-serif;
    .beta {
      display: flex;
      justify-content: center;
      margin-bottom: 10vh;
      width: 80vw;
      height: 10vh;
      border: red 1px solid;
    }
    .container {
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
      width: 80vw;
      height: 40vh;
      border: blue 1px solid;
      .profil {
        border-radius: 3%;
        margin: 25px;
        width: 20vw;
        border: yellowgreen 1px solid;
      }
      .myapps {
        border-radius: 3%;
        margin: 25px 0px 25px 0px;
        width: 20vw;
        border: orange 1px solid;
      }
      .soon {
        border-radius: 3%;
        margin: 25px 0px 25px 25px;
        width: 20vw;
        border: purple 1px solid;
      }
    }
  }
`;

export default StyledCockpit;
