import styled from 'styled-components';

const StyledMarketPlaceCatalog = styled.div`
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
`;

export default StyledMarketPlaceCatalog;
