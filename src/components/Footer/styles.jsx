import styled from 'styled-components';

const StyledFooter = styled.div`
  .Footer {
    display: flex;
    border: black solid 2px;
    .Footer_informations {
      border: green solid 2px;
      width: 50%;
      list-style-type: none;
      .LegalMentions {
        padding: 0;
        border: red solid 2px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        li {
          list-style-type: none;
          border: blue solid 2px;
        }
      }
      .Informations {
        padding: 0;
        border: red solid 2px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        li {
          list-style-type: none;
          border: blue solid 2px;
        }
      }
    }
  }
`;

export default StyledFooter;
