import styled from 'styled-components';

const StyledAboutUs = styled.div`
  .aboutUsPage {
    font-family: 'roboto', sans-serif;
    padding: 50px;
    .aboutUsContent {
      margin: auto;
      width: 80vw;
      border-radius: 5px;
      padding-bottom: 20px;
      background-color: #ffff;
      .aboutUsTitle {
        color: #223594;
        font-size: 44px;
        font-weight: 300;
        padding-top: 20px;
        margin: 20px;
      }
      .aboutUsText {
        width: 90%;
        margin: auto;
        padding: 10px;
      }
    }
  }
`;

export default StyledAboutUs;
