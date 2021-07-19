import styled from 'styled-components';

const StyledMarketPlaceCatalog = styled.div`
  a {
    text-decoration: none;
    color: #223594;
  }
  .titre {
    color: #223594;
    font-family: 'roboto', sans-serif;
    font-size: 44px;
    font-weight: 300;
    margin-top: 20px;
    margin-left: 20px;
  }
  .AppGallery {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: row wrap;
    margin-bottom: 50px;
  }
  .card {
    margin: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 8px;
    border: solid 1px #c2bcb2;
    width: 390px;
    height: 180px;
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    :hover {
      transform: scale(1.02);
      cursor: pointer;
      box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
    }
    .image {
      width: 390px;
      height: 130px;
      margin-left: 0;
      overflow-y: hidden;
    }
    .imageSize {
      border-radius: 8px;
      background-size: cover;
      max-width: 100%;
    }
    .infos {
      display: flex;
      height: 50px;
    }
    .societe {
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      background-color: white;
      width: 230px;
      p {
        margin: 0;
        margin-left: 30px;
        line-height: 20px;
      }
      .name {
        font-family: 'roboto', sans-serif;
        font-weight: 700;
        font-size: 18px;
        margin-top: 5px;
      }
      .activite {
        font-family: 'roboto', sans-serif;
        font-weight: 400;
        font-size: 10px;
      }
    }
    .button {
      background-color: #f78f21;
      height: 18px;
      width: 67px;
      left: 8px;
      top: 2px;
      border-radius: 20px;
      color: #ffffff;
      font-family: 'roboto', sans-serif;
      font-weight: 700;
      font-size: 10px;
      text-align: center;
      margin-top: 15px;
      padding-top: 5px;
      margin-left: 60px;
    }
  }
  .userOff {
    width: 100vw;
    height: 20vh;
    padding-top: 5vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'roboto', sans-serif;
    .withoutUser {
      flex-direction: column;
      width: 25vw;
      height: 40vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 5px;
      background-color: #ffff;
      color: #3a52be;
      .buttonProfil {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        margin-top: 10px;
        margin-bottom: 15px;
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

export default StyledMarketPlaceCatalog;
