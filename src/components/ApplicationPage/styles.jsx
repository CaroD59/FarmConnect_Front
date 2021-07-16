import styled from 'styled-components';

const StyledApplicationPage = styled.div`
  .appPage {
    width: 85vw;
    margin: auto;
    .banner {
      .banner {
        width: 100%;
        margin-top: 15vh;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(218, 218, 218, 0.5);
      }
    }
    .nameDesc {
      color: #223594;
      font-family: 'roboto', sans-serif;
      .description {
        padding: 5%;
      }
      .nameButton {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .name {
          padding: 3%;
          font-size: 3em;
        }
        .button {
          cursor: pointer;
          width: 100px;
          height: 40px;
          margin: 2%;
          color: #ffff;
          background-color: rgb(247, 143, 33, 0.75);
          border: rgb(247, 143, 33, 0.75);
          border-radius: 20px;
        }
        .buttonIsFav {
          cursor: pointer;
          width: 100px;
          height: 40px;
          margin: 2%;
          color: #ffff;
          background-color: red;
          border: rgb(247, 143, 33, 0.75);
          border-radius: 20px;
        }
      }
    }
    .buttonlink {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      .linktoapp {
        width: 200px;
        height: 40px;
        color: #ffff;
        background-color: rgb(247, 143, 33, 0.75);
        border: rgb(247, 143, 33, 0.75);
        border-radius: 20px;
        a {
          color: #ffff;
          text-decoration: none;
          font-size: larger;
        }
      }
    }
  }
`;

export default StyledApplicationPage;
