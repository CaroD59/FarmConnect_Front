import styled from 'styled-components';

const StyledMarketPlaceCatalog = styled.div`
  .CataPage {
    width: 90vw;
    font-family: 'roboto', sans-serif;
    padding-top: 80px;
    padding-bottom: 50px;
    margin: auto;
    color: #223594;
    .titre {
      font-size: 44px;
      font-weight: 300;
      padding-bottom: 20px;
      padding-left: 30px;
    }
    .AppGallery {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      margin-bottom: 30px;
      margin-top: 10px;
      a {
        text-decoration: none;
        color: #223594;
        .card {
          overflow: hidden;
          cursor: pointer;
          background-color: white;
          border-radius: 5px;
          width: 320px;
          height: 180px;
          margin: 20px;
          position: relative;
          border: rgba(70, 70, 70, 0.15) solid 1px;
          box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
          :hover {
            border: rgb(247, 143, 33, 0.75) solid 1px;
          }
          .imageSize {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
          .name {
            font-weight: 400;
            font-size: 18px;
            padding: 10px;
            position: absolute;
            bottom: 0;
            background-color: #ffff;
            width: 100%;
            border-top: rgba(70, 70, 70, 0.15) solid 1px;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;

export default StyledMarketPlaceCatalog;
