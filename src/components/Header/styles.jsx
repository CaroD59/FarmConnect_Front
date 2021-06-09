import styled from 'styled-components';

const StyledHeader = styled.div`
  .NavBar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: auto;
    width: 100%;
    height: 65px;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
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
        font-family: 'roboto', sans-serif;
        font-size: 12px;
        width: 90px;
        height: 25px;
        border-bottom: transparent solid 2px;
        :hover {
          border-bottom: rgba(34, 53, 148, 1) solid 2px;
        }
      }
    }
  }
`;

export default StyledHeader;
