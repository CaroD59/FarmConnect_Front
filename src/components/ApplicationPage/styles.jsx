import styled from 'styled-components';

const StyledApplicationPage = styled.div`
  .appPage {
    width: 85vw;
    margin: auto;
    .banner {
      .banner {
        width: 100%;
        margin-top: 10vh;
        border-radius: 5px;
        box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
      }
    }
    .nameDesc {
      color: #223594;
      font-family: 'roboto', sans-serif;
      .description {
        padding: 0px 60px 30px 60px;
      }
      .nameButton {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .name {
          padding: 30px;
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
      .linktoapp {
        width: 200px;
        height: 40px;
        color: #ffff;
        background-color: rgb(247, 143, 33, 0.75);
        border: rgb(247, 143, 33, 0.75);
        border-radius: 20px;
        margin-bottom: 50px;
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
