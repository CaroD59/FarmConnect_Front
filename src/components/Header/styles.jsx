import styled from 'styled-components';

const StyledHeader = styled.div`
  .burger {
    display: none;
  }
  .burger1 {
    display: none;
  }
  .NavBar {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80px;
    background-color: #ffff;
    border-bottom: rgb(247, 143, 33, 0.75) 1px solid;
    box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
    .btn-navigation {
      display: none;
    }
    .container {
      display: flex;
    }
    .logoProfile {
      a {
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
        margin-left: 20px;
      }
    }
    .Pages {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 25px;
          a {
            font-family: 'roboto', sans-serif;
            text-decoration: none;
            font-size: 15px;
            color: rgba(70, 70, 70, 1);
            border-bottom: transparent solid 2px;
            :hover {
              padding: 10px;
              border-bottom: rgba(34, 53, 148, 1) solid 2px;
              transition: 0.2s;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 920px) {
    .NavBar {
      display: flex;
      justify-content: space-between;

      .container {
        display: none;
      }
      .btn-navigation {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        border: none;
        background-color: #ffff;
        margin-right: 30px;
        cursor: pointer;
        .barre {
          height: 4px;
          margin: 3px 0px;
          width: 25px;
          background-color: rgb(247, 143, 33, 0.75);
        }
      }
    }
    .burger {
      display: fixed;
      position: fixed;
      top: 0;
      right: 0;
      background-color: #ffff;
      width: 40%;
      height: 100%;
      margin-top: 82px;
      transition: 1s;
      ul {
        display: flex;
        flex-direction: column;
        li {
          padding: 20px;
          p {
            font-family: 'roboto', sans-serif;
            text-decoration: none;
            font-size: 15px;
            color: rgb(247, 143, 33, 0.75);
            border-bottom: transparent solid 2px;
          }
        }
      }
    }
    .burger1 {
      display: fixed;
      position: fixed;
      top: 0;
      right: 0;
      background-color: #ffff;
      width: 35%;
      height: 100%;
      margin-top: 82px;
      transition: 1s;
      transform: translateX(100%);
      ul {
        display: flex;
        flex-direction: column;
        li {
          padding: 20px;
          p {
            font-family: 'roboto', sans-serif;
            text-decoration: none;
            font-size: 15px;
            color: rgb(247, 143, 33, 0.75);
            border-bottom: transparent solid 2px;
            :hover {
              padding: 10px;
              border-bottom: rgba(34, 53, 148, 1) solid 2px;
              transition: 0.2s;
            }
          }
        }
      }
    }
  }
`;

export default StyledHeader;
