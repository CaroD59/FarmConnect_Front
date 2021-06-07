import styled from 'styled-components';

const StyledHome = styled.section`
  height: 800px;
  width: 100%;
  border: 1px solid black;

div.parcelle {
  display: flex;
  justify-content: space-around;
  width: 98%;
  border: 1px solid red;
  margin-left: 10px;
  margin-top: 30px;
 
 .infos-parcelle {
   border: 1px solid grey;
   border-radius: 3%;
   width: 200px;
   box-shadow: 1px 1px ;

ul {
  list-style: none;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  
  li {
    margin-top: 10px;
  
  }
}

 }

  .map {
    border-radius: 2%;
    content: url(https://cdn2.regie-agricole.com/ulf/TNM_Biblio/fiche_135135/fiches_foncier_2013.jpg);
  }
}

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
ul.coordonnées {
  border: 1px solid yellowgreen;
  height: 150px;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 0;

li.coordonnées {
  list-style: none;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 290px;
        height: 30px;
        img {
          width: 20px;
          height: 20px;
          margin-left: 0;
        }
}
}

    ul {
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
`;

export default StyledHome;
