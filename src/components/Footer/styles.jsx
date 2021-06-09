import styled from 'styled-components';

const StyledFooter = styled.div`
  .Header {
    display: flex;
    border: black solid 2px;
    .Footer_informations {
      border: green solid 2px;
      width: 50%;
      list-style-type: none;
      ul {
        li {
          list-style-type: none;
        }
      }
    }
  }
`;

export default StyledFooter;
