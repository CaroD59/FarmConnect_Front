import styled from 'styled-components';

const StyledHeader = styled.div`
  .NavBar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: auto;
    width: 100%;
    height: 65px;
    box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.25);
    ul {
      display: flex;
      justify-content: flex-end;
      padding: 0;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 5px;
        margin-right: 15px;
        width: 90px;
        height: 25px;
        border-bottom: transparent solid 2px;
        a {
          font-family: 'roboto', sans-serif;
          text-decoration: none;
          font-size: 14px;
          color: rgba(70, 70, 70, 1);
        }
        :hover {
          border-bottom: rgba(34, 53, 148, 1) solid 2px;
          transition: 0.3s;
        }
      }
    }
  }
`;

export default StyledHeader;
