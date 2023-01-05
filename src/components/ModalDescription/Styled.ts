import styled from "styled-components";


const StyledSection = styled.section`

position: fixed;

width: 100%;
height: 100%;

top: 0;
left: 0;

background-color: var(--grey-1);

display: flex;
align-items: center;
justify-content: center;

.cardModalDescription{
    background-color: var(--color-modal);

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
}
.closeModal{
    position: absolute;

    top: 10px;
    right: 10px;

    padding: 3px 6px;

    border-radius: var(--radius-6);
}

`