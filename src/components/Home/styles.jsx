import styled from 'styled-components';

const StyledHome = styled.section`
  .home {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'roboto', sans-serif;
    background-color: rgba(218, 218, 218, 0.25);
    .profil {
      width: 60%;
    }
    .parcelle {
      width: 60%;
      height: 500px;
      display: flex;
      justify-content: space-between;
      margin: 30px 80px;
      .parcelleMap {
        width: 80%;
        margin: 30px;
        border-radius: 8px;
        background-color: #ffff;
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      }
    }
      .infos-parcelle {
        width: 20%;
        margin: 30px;
        border-radius: 8px;
        background-color: #ffff;
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
        h3 {
          font-size: 20px;
          padding: 15px;
          ul {
            li {
            }
          }
        }
    }
    .helloUser {
      color: rgba(70, 70, 70, 1);
      text-align: center;
      font-size: 15px;
      margin: 30px;
      padding: 10px;
    }
    .welcomeProfil {
      color: rgba(70, 70, 70, 1);
      text-align: center;
      font-size: 40px;
      margin: 30px;
      padding: 10px;
    }
    .infos {
      height: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .containers {
        margin: 30px;
        width: 500px;
        height: 300px;
        border-radius: 8px;
        background-color: #ffff;
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
        .cardName {
          font-size: 20px;
          padding: 15px;
          margin: 0;
          font-weight: normal;
        }
        .card {
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
          margin: 0;
          li {
            list-style: none;
            text-align: start;
            display: flex;
            align-items: center;
            p {
              margin: 0;
            }
          }
          }
        }
      }
    }
  }
`;

export default StyledHome;
