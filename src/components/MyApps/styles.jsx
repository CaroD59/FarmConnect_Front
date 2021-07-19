import styled from 'styled-components';

const StyledMyApps = styled.div`
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

export default StyledMyApps;
