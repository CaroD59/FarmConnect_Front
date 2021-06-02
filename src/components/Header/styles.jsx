import styled from 'styled-components';

const StyledHeader = styled.div`
  border: solid black 2px;
  margin: auto;
  width: 90%;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    li {
      border: solid red 2px;
      padding: 5px;
      margin-right: 15px;
    }
  }
`;

export default StyledHeader;
