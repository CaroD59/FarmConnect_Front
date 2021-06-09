import styled from 'styled-components';

const StyledHome = styled.section`
  height: 800px;
  width: 100%;
  border: 1px solid black;

  .profil {
    width: 98%;
    height: 350px;
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1 {
      width: 98%;
      font-family: Verdana;
      font-weight: lighter;
      font-size: 35px;
      color: #7171ec;
      margin-left: 20px;
    }

  .infos {
    width: 95%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ul.contact {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 0;
     

      li.contact {
        list-style: none;
        font-family: Arial, Helvetica, sans-serif;
        text-align: start;
        display: flex;
        align-items: center;

        img {
          margin-right: 20px;
          padding-left: 10px;
          width: 30px;
          height: 30px;
        }
      }
    }

    div.containers {
      border: 2px solid #dbd8d8;
      box-shadow: 1px 1px #dbd8d8;
      width: 400px;
      text-align: center;
      height: 250px;
      margin-right: 35px;
      border-radius: 4%;
      h3 {
        font-family: Verdana;
        font-weight: normal;
        font-size: 20px;
        text-align: left;
        padding: 10px;
      }

      ul.content {
    display: flex;
    flex-direction: column;
    text-align: start;
    li {
      list-style: none;
      font-family: Arial, Helvetica, sans-serif;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border: 1px solid red;
      width: 290px;
      height: 30px;
      p {
        font-weight: bold;
      }
    }
  }
    }
  }
`;

export default StyledHome;
