import styled from "styled-components";

export const StyleUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  gap: 25px;

  @media(max-width: 500px){
    flex-wrap: nowrap;
    flex-direction: row;

      padding: 20px;
      overflow: auto;
  }
  
  li {
    min-width:200px;
    height: 280px;
    max-width:200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;

    border-radius: 8px;
    border: 0.5px solid  #D1D5DB ;

   :hover{
    transition: all 0.5s ease;
    transform: scale(1.1);
    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   }
    
    animation: slideInUp;
    animation-duration: 0.8s;

    background: #FFFFFF;

    a{
      color:  #22C55E;
      font-weight: bold;

      
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
      height: 90px;
      

      display: flex;
      flex-direction: column;
     
      align-items: center;
      justify-content: center;
     

      

      border-top: 2px solid #D1D5DB ;
    
      gap: 5px;
      p{
        font-weight: 700;
        font-size: 16px;
        line-height: 29px;
        color: #1F2937;
        width: 100%;

        text-align: center;
        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
      }
    }
  }
  .divError{
    display: flex;
    flex-direction: column;
    align-items: center;

       h2{
        font-size: 30px;
        text-align: center;

        line-height: 150%;
       }
       span{
        font-size: 100px;
        transform: rotate(90deg);
       }

  }


`;
