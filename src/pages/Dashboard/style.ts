import styled from "styled-components";
export const StyleHeader = styled.header`
   width: 100%;
  min-height: 60px;
  padding: 0 80px 0 80px;
  background: #F9FAFB;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  @media(max-width: 1020px){
    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }
  img{
    width: 100%;
    max-width: 257px;
    height: 48px;
  }
  .foto{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .infUser{
    display: flex;
    align-items: center;
    gap: 10px;
    
    @media(max-width: 1020px){
    width: 100%;
    max-width: 436.5px;
    justify-content: space-evenly;
    gap: 30px;
  }
  }
  .logout{
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .inputHeader{
    position: relative;
    background-color: red;
    width: 100%;
    max-width: 436.5px;
    height: 39px;

    border-radius: 20px;

    border: none;

    input{
      width: 100%;
      min-height: 100%;
      padding-left: 15px;
      border-radius: 20px;
  }

    img{
      position: absolute;

      top: 12px;
      right: 20px;
      width: 15px;
      height: 15px;

      cursor: pointer;
    }
  }

  .btnLogin{
    background-color: #22C55E;
    color: #F9FAFB;
    padding: 10px 20px;
    border-radius: 8px;


    :hover{
       background-color:  #86EFAC;
       color: black;
    }
  }
`;
export const StyleMain = styled.main`
  min-height: 100vh;


  display: flex;
  
  gap: 100px;
  padding-top: 100px;
 
  @media(max-width:500px){
      flex-direction: column;

     
      padding-top: 50px;
      gap: 0px;
    }


  .asideDash{
    width: 200px;
    height: 620px;
       
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: 50px;

    gap: 15px;

    position: sticky;
    z-index: 99;
    top: 5px;

    background-color: white;

    @media(max-width:500px){
      max-height: 120px;
      width: 100%;
      position: relative;
      margin-left: 0px;

      background: linear-gradient(90deg, rgba(249,249,249,1) 79%, rgba(219,227,222,1) 100%);
      
      
    }
    
    h4{
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #000000;
    }

    ul{
      display: flex;
      flex-direction: column;
      @media(max-width:500px){

        flex-direction: row;
        overflow: auto;
        width: 100%;
        
        padding: 10px;
    }

      gap: 10px;

      .btnFilter{
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #1F2937;

         
        border-radius: 8px;
        background-color: white;
        :focus{
          color: white;
          background-color:  #22C55E;
        }

        :hover{
          color: white;
          background-color:  #22C55E;
        }
      }


    }
    #hover{
          color: white;
          background-color:  #22C55E;
        }

  }

  .sectonBook {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    padding: 20px;
    @media(max-width:500px){
      padding: 20px 0px;
}

  
  }
`;


