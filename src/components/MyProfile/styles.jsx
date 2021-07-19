import styled from 'styled-components';

const StyledMyProfile = styled.section`
  .myProfile {
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: center;
    h1 {
      color: #223594;
      font-family: 'roboto', sans-serif;
      font-size: 40px;
    }
    .infos {
      margin-top: 100px;
      display: flex;
      justify-content: space-around;
      .containers {
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        padding: 30px;
        background-color: white;
        width: 350px;
        .card {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 300px;
          label {
            display: flex;
            justify-content: space-between;
            width: 100%;
            input {
              width: 70%;
            }
          }
        }
        h3 {
          font-weight: bold;
          font-family: 'roboto', sans-serif;
        }
        .picto {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-top: 55px;
          height: 200px;
          img {
            margin: 5px;
            box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid rgba(0, 0, 0, 0.1);
            width: 60px;
            height: 60px;
            border-radius: 100%;
          }
          img:hover {
            border: 2px solid #f78f21;
            transition: 100ms;
          }
        }
      }
    }
  }
`;

export default StyledMyProfile;
