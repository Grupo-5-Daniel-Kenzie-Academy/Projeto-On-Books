import styled from "styled-components";


const StyledSection = styled.section`

position: fixed;

width: 100%;
height: 100%;

top: 0;
left: 0;

background-color: var(--grey-6);

display: flex;
align-items: center;
justify-content: center;

.cardModalFavorit{
    background-color: var(--color-primary-70);
    color: var(--white);

    height: 140px;
    width: 85%;
    max-width: 350px;

    border-radius: var(--radius-10);

    padding: 20px; 

    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    position: relative;

    div{
        display: flex;
        gap: 20px;
    }
    div button{
        padding: 5px 20px;

        border-radius: var(--radius-6);

        font-weight: 600;
    }
}
.closeModal{
    position: absolute;

    top: 10px;
    right: 10px;

    padding: 3px 6px;

    border-radius: var(--radius-6);
}

h3{
    width: 85%;
}

`

export {StyledSection}