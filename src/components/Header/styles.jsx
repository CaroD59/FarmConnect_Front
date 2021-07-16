import styled from 'styled-components';

const StyledHeader = styled.div`
  .NavBar {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: #ffff;
    border-bottom: rgb(247, 143, 33, 0.75) 1px solid;
    box-shadow: 0px 10px 10px rgba(218, 218, 218, 0.25);
    .logoContainer {
      a {
      }
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
`;

export default StyledHeader;
