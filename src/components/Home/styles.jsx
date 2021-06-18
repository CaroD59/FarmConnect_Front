import styled from 'styled-components';

const StyledHome = styled.section`
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'roboto', sans-serif;
    background-color: rgba(218, 218, 218, 0.25);
    .profil {
      display: flex;
      width: 1000px;
      height: 350px;
      .infos {
        height: 300px;
        display: flex;
        width: 100%;
        justify-content: center;
        .containers {
          padding: 5px;
          margin: 20px;
          width: 330px;
          height: 280px;
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
            align-items: flex-start;
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
    width: 1000px;
    height: 380px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    .infos-parcelle {
      width: 200px;
      border-radius: 8px;
      background-color: #ffff;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
      font-size: 70%;
      height: 280px;
      margin-left: 20px;
      h3 {
        font-size: 20px;
        margin-top: 20px;
        padding-left: 20px;
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
      width: 700px;
      border-radius: 8px;
      background-color: #ffff;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
      height: 280px;
      margin-right: 20px;
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
`;

export default StyledHome;
