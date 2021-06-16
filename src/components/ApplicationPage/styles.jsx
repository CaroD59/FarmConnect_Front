import styled from 'styled-components';

const StyledApplicationPage = styled.div`
  .logoBanner {
    position: relative;
    width: 100vw;
    height: 350px;
    display: flex;
    justify-content: center;
    border: black solid 2px;
    .logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 100px;
    }
    .banner {
      width: 100%;
    }
  }
  .nameDesc {
    width: 100vw;
    height: 500px;
    color: #223594;
    font-family: 'roboto', sans-serif;
    border: yellowgreen solid 2px;
    .name {
      margin-top: 20px;
      margin-left: 160px;
      font-size: 45px;
    }
    .description {
      margin-top: 20px;
      margin-left: 300px;
    }
  }
`;

export default StyledApplicationPage;
