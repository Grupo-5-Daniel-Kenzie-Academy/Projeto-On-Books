import styled from "styled-components";

export const StyleUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  


  flex-wrap: wrap;
  justify-content: flex-start;

  gap: 25px;
  
  li {
    width:230px;
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;

    border-radius: 8px;

    

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
   
   
    animation: slideInUp;
    animation-duration: 0.8s;

    background: #FFFFFF;

    a{
      color:  #22C55E;
      :hover{
        text-decoration: underline;
      }
    }

    .imgBook{
      width: 100px;
      height: 150px;
    }
    .divInfoBO{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      border-top: 1px solid black;
      
      gap: 5px;
      p{
        font-weight: 700;
        font-size: 16px;
        line-height: 29px;
        color: #1F2937;
      }
    }
    .divRest{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      
    }
  }


`;
