import styled from 'styled-components';

const StyledFooter = styled.div`
  .Footer {
    width: 100vw;
    height: 200px;
    display: flex;
    bottom: 0;
    border-top: rgba(220, 220, 220, 1) 1px solid;
    background-color: rgba(218, 218, 218, 0.25);
    .Footer_informations {
      padding-top: 15px;
      margin: auto;
      list-style-type: none;
      font-family: 'roboto', sans-serif;
      color: rgba(70, 70, 70, 1);
      font-size: 12px;
      .LegalMentions {
        padding: 0;
        display: flex;
        align-items: left;
        flex-direction: column;
        height: auto;
        li {
          list-style-type: none;
          padding: 3px;
          a {
            text-decoration: none;
          }
        }
      }
      .Informations {
        padding: 0;
        display: flex;
        align-items: left;
        flex-direction: column;
        li {
          list-style-type: none;
          padding: 3px;
          a {
            text-decoration: none;
            color: rgba(70, 70, 70, 1);
          }
        }
      }
    }
  }
`;

export default StyledFooter;
