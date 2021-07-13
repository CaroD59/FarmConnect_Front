import styled from 'styled-components';

const StyledCGU = styled.div`
  .cgu {
    font-family: 'roboto', sans-serif;
    padding: 50px;
    background-color: rgba(218, 218, 218, 0.25);
    .cguContent {
      margin: auto;
      width: 80vw;
      border-radius: 5px;
      padding-bottom: 20px;
      background-color: #ffff;
      .cguTitle {
        color: #223594;
        font-size: 44px;
        font-weight: 300;
        padding-top: 20px;
        margin: 20px;
      }
      .cguText {
        width: 90%;
        margin: auto;
        padding: 10px;
      }
    }
  }
`;

export default StyledCGU;
