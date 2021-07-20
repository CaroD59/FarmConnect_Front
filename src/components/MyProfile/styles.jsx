import styled from 'styled-components';

const StyledMyProfile = styled.section`
  .welcomeProfil {
    color: #223594;
    font-size: 44px;
    font-weight: 300;
    padding-top: 40px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-family: 'roboto', sans-serif;
    font-weight: bolder;
  }
  .myProfile {
    justify-content: center;
    font-family: 'roboto', sans-serif;
    display: flex;
    flex-wrap: wrap;

    .containers {
      padding: 5px;
      margin: 20px;
      width: 450px;
      min-width: 20vw;
      height: 390px;
      border-radius: 8px;
      background-color: #ffff;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
      .cardExploitation {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        display: flex;
        color: #223594;

        h3 {
          width: 100%;
        }
        .btn-edit {
          background-color: transparent;
          border: none;
          cursor: pointer;
          .img {
            width: 30px;
          }
        }
      }
      .picto {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 55px;
        height: 200px;
        .pic {
          margin: 5px;
          width: 70px;
          height: 70px;
          border-radius: 100%;
          box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid rgba(0, 0, 0, 0.1);
          .img {
            width: 60px;
            height: 60px;
            border-radius: 100%;
          }
        }
        .pic:hover {
          border: 2px solid #f78f21;
          transition: 100ms;
        }
      }
      .cardName {
        font-size: 20px;
        padding: 15px;
        margin: auto;
        font-weight: normal;
      }
      .cardExploitation {
        color: black;
        margin: auto;
      }
      .form {
        .card {
          padding-left: 15px;
          padding-right: 15px;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-top: 20px;
          .idUser {
            padding-bottom: 20px;
            p {
              font-weight: bold;
            }
          }

          li {
            list-style: none;
            display: flex;
            justify-content: space-between;
            font-size: 15px;
            height: 5vh;

            .RegistrationInput {
              border: none;
              padding-right: 10px;
              font-family: 'roboto', sans-serif;
              font-size: 15px;
              width: 50%;
              height: 25px;
              opacity: 10;
              border: 1px solid grey;
              box-shadow: grey;
              text-align: right;
              border-radius: 5px;
              padding-left: 10px;
              margin-bottom: 20px;
              outline-color: rgba(153, 145, 145, 0.25);
            }
          }
        }
      }
    }
  }

  .userOff {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'roboto', sans-serif;
    .withoutUser {
      margin-top: 80px;
      padding-top: 25px;
      padding-bottom: 25px;
      height: 20vh;
      flex-direction: column;
      width: 25vw;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 5px;
      background-color: #ffff;
      color: #223594;
      box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
      .buttonProfil {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 50px;
        margin-top: 25px;
        color: #ffff;
        background-color: rgb(247, 143, 33, 0.75);
        border: solid 1px rgb(247, 143, 33, 0.75);
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        text-decoration: none;
      }
    }
  }
`;

export default StyledMyProfile;
