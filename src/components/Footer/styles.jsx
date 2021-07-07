import styled from 'styled-components';

const StyledFooter = styled.div`
  .Footer {
    position: fixed;
    width: 100vw;
    display: flex;
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
          font-style: italic;
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
          font-style: italic;
        }
      }
    }
  }
`;

export default StyledFooter;
