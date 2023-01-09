import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 80px 0 80px;
  background: #F9FAFB;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  @media(max-width: 584px){
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  img{
    width: 257px;
    height: 48px;
    
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    @media(max-width: 584px){
      width: 100%;
      justify-content: space-evenly;
  }
    a{
      :hover{color:#22C55E}
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
