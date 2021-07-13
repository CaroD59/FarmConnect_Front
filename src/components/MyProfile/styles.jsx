import styled from 'styled-components';

const StyledMyProfile = styled.section`
  .myProfile {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'roboto', sans-serif;
    .welcomeProfil {
      color: #223594;
      font-size: 44px;
      font-weight: 300;
      padding-top: 30px;
      margin: 20px;
    }
    .profil {
      display: flex;
      height: 350px;
      .infos {
        height: 300px;
        display: flex;
        width: 100%;
        justify-content: center;
        .containers {
          padding: 5px;
          margin: 20px;
          width: 25vw;
          height: 50vh;
          border-radius: 8px;
          background-color: #ffff;
          box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
          .title {
            color: #223594;
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
            }
            .pic:hover{
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
          .card {
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-top: 20px;
              li {
                list-style: none;
                display: flex;
                font-size: 15px;
                h4 {
                  padding-left: 40px;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledMyProfile;
