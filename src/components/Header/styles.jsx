import styled from 'styled-components';

const StyledHeader = styled.div`
  .NavBar {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80px;
    background-color: #ffff;
    border-bottom: rgb(247, 143, 33, 0.75) 1px solid;
    box-shadow: 0px 10px 10px rgba(218, 218, 218, 0.25);
    .btn-navigation {
      display: none;
    }
    .container {
      display: flex;
    }
    .logoProfile {
      a {
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
        margin-left: 20px;
      }
    }
    .Pages {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 25px;
          a {
            font-family: 'roboto', sans-serif;
            text-decoration: none;
            font-size: 15px;
            color: rgba(70, 70, 70, 1);
            border-bottom: transparent solid 2px;
            :hover {
              padding: 10px;
              border-bottom: rgba(34, 53, 148, 1) solid 2px;
              transition: 0.2s;
            }
          }
        }
      }
    }
  }
  .burger {
      display: none;
    }
  @media screen and (max-width: 920px) {
    .NavBar {
      display: flex;
      align-items: center;
      .btn-navigation {
        position: absolute;
        border: none;
        height: 25px;
        width: 50px;
        background: white;
        display: flex;
        position: relative;
        cursor: pointer;
        margin-right: 30px;
        justify-content: space-between;
        flex-direction: column;
        .barre {
          width: 30px;
          height: 4px;
          background-color: rgb(247, 143, 33, 0.75);
        }
      }
      .container {
        display: none;
      }
    }
   
    .burger1 {
        margin-top: 81px;
        display: fixed;
        position: fixed;
        right: 0;
        top: 0;
        padding: 30px;
        width: 20%;
        height: 100%;
        background-color: #ffff;
        transition: 1s;
   
        .pages {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          --webkit-transform: translateY(-50%);
          height: 100%;
     
          .logoProfile {
       position: absolute;
       top: 40%;
      }

            .btn-navigation1 {
              position: absolute;
            }
          ul {
    
            height: 70%;

              li {
               margin: 50px 0;
               font-style: bold;
               p {
                 color: rgb(247, 143, 33, 0.75);
                 font-family: 'roboto', sans-serif;
                 text-decoration: none;
                 font-size: 15px;
                 width: 100px;
                 
            :hover {
              padding: 10px;
              border-bottom: rgba(34, 53, 148, 1) solid 2px;
              transition: 0.2s;
            }
               }
            }
          }
        }
      }
    .burger { 
        margin-top: 81px;
        display: fixed;
        position: fixed;
        right: 0;
        top: 0;
        padding: 0 30px;
        width: 20%;
        height: 100%;
        background-color: #ffff;
        transform: translateX(100%);
        --webkit-transform: translateX(100%); 
        transition: 1s;
        .pages {
          height: 100%;
          width: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            --webkit-transform: translateY(-50%);
            .logoProfile {
       position: absolute;
       top: 40%;
      }
          ul {
            height: 70%;
              li {
               margin: 50px 0;
              
               p {
                 color: rgb(247, 143, 33, 0.75);
                 font-family: 'roboto', sans-serif;
                 text-decoration: none;
                 font-size: 15px;
                 width: 100px;
                 
            :hover {
              padding: 10px;
              border-bottom: rgba(34, 53, 148, 1) solid 2px;
              transition: 0.2s;
            }
               }
            }
          }
        }
      }
`;

export default StyledHeader;
