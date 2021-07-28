import styled from 'styled-components';

const StyledPrivacyPolicy = styled.div`
  .privacyPolicyPage {
    font-family: 'roboto', sans-serif;
    padding: 50px;
    .privacyPolicyContent {
      margin: auto;
      width: 80vw;
      border-radius: 5px;
      padding-bottom: 20px;
      background-color: #ffff;
      box-shadow: -1px -1px 21px 1px rgba(70, 70, 70, 0.15);
      .privacyPolicyTitle {
        color: #223594;
        font-size: 44px;
        font-weight: 300;
        padding-top: 20px;
        margin: 20px;
      }
      .privacyPolicyText {
        width: 90%;
        margin: auto;
        padding: 10px;
      }
    }
  }
`;

export default StyledPrivacyPolicy;
