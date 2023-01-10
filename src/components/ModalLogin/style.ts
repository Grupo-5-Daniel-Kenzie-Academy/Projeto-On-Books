import styled from "styled-components";

export  const StyleModalLogin=styled.div`
    background-color: red;
    position: fixed;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    
    background: rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px;

    

    .divContainer{
        width: 100%;
       max-width: 520px;
        display: flex;
        flex-direction: column;
        gap: 50px;

        padding: 20px 40px;

        background-color: white;
        
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .divheader{

        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            font-weight: 700;
            font-size: 38px;
            line-height: 58px;
            color: #1F2937;
        }
        button{
            background-color: #22C55E;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;

            :hover{
                color: #22C55E ;
                background-color: #E5E7EB;
            }
        }

    }

    form{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

 .btnLogar{
    height: 71px;
    background: #22C55E;
    border-radius: 8px;
    color: white;

    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    :hover{
                color: #22C55E ;
                background-color: #E5E7EB;
            }
 }
`