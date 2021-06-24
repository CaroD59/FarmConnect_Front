import styled from 'styled-components';

const StyledMyProfile = styled.section`
  .home {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'roboto', sans-serif;
    background-color: rgba(218, 218, 218, 0.25);
    .profil {
      display: flex;
      width: 100%;
      .infos {
        height: 300px;
        display: flex;
        width: 100%;
        justify-content: center;
        .containers {
          padding: 5px;
          margin: 20px;
          width: 25vw;
          height: 300px;
          border-radius: 8px;
          background-color: #ffff;
          box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
          .title {
            display: flex;
            justify-content: space-between;
            padding-right: 15px;
            align-items: center;
            .editor {
              width: 20px;
              height: 20px;
            }
            .editor:hover {
              width: 22px;
              height: 22px;
              transition: 100ms;
            }
          }
          .picto {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top: 20px;

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
            }
            .pic:hover{
              border: 2px solid #f78f21;
              transition: 100ms;
            }
          }

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
            justify-content: space-around;
            padding-top: 20px;
              li {
                list-style: none;
                display: flex;
                font-size: 70%;
                h4 {
                  width: 100px;
                  padding-left: 10px;
                  font-weight: bold;
                }
                
              }
            }
          }
        }
      }
    }
  }
  .parcelle {
    width: 88%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    margin: 70px;
    margin-bottom: 10px;

    .infos-parcelle {
      width: 250px;
      margin: 30px;
      border-radius: 8px;
      background-color: #ffff;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
      font-size: 70%;
      h3 {
        font-size: 20px;
        padding: 15px;
        margin-top: 20px;
      }
      ul {
        margin-top: 40px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li {
          padding-left: 10px;
          display: flex;
          h4 {
            width: 80px;
            font-weight: bold;
          }
          em {
            font-weight: normal;
          }
        }
      }
    }
    .parcelleMap {
      width: 850px;
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
  .button {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
      font-family: 'roboto', sans-serif;
      background-color: #f78f21;
      border: 0;
      border-radius: 3px;
      width: 90px;
      height: 30px;
    }
  }
`;

export default StyledMyProfile;
