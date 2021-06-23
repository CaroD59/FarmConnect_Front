import styled from 'styled-components';

const StyledHeader = styled.div`
  .NavBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 65px;
    border-bottom: rgb(247, 143, 33, 0.75) 1px solid;
    box-shadow: 0px 10px 10px rgba(218, 218, 218, 0.25);
    .logoContainer {
      a {
        display: flex;
        justify-content: space-between;
      }
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
      ul {
        display: flex;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 50px;
          width: 90px;
          height: 25px;
          border-bottom: transparent solid 2px;
          a {
            font-family: 'roboto', sans-serif;
            text-decoration: none;
            font-size: 14px;
            color: rgba(70, 70, 70, 1);
            :hover {
              border-bottom: rgba(34, 53, 148, 1) solid 2px;
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
`;

export default StyledHeader;
