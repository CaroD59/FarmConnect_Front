import styled from 'styled-components';

const StyledHome = styled.section`
  height: 800px;
  width: 100%;
  border: 1px solid black;

  .profil {
    border: 1px solid red;
    width: 98%;
    height: 350px;
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  h1 {
    border: 1px solid yellowgreen;
    width: 98%;
  }

  .infos {
    border: 1px solid yellowgreen;
    width: 95%;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  li {
    border: 1px solid pink;
    width: 300px;
    list-style: none;
    text-align: center;
    height: 185px;
    margin-right: 35px;
  }
`;

export default StyledHome;
