import styled from "styled-components";

export const StyledSection = styled.section`

position: fixed;

width: 100%;
height: 100%;

top: 0;
left: 0;

background-color: var(--grey-6);

display: flex;
align-items: center;
justify-content: center;

.cardModalDescription{
    background-color: var(--color-primary-70);
    color: var(--white);

    height: 90%;
    width: 85%;
    max-width: 450px;

    border-radius: var(--radius-10);

    padding: 20px; 

    display: flex;
    flex-direction: column;
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

img{
    width: 20%;
    height: 35%;
    max-height: 400px;

    object-fit: cover;
}

h3{
    font-size: 0.7rem; 

    margin-top: -10px;
}

p{

    margin-top: -10px;

    font-size: 0.53rem;

    line-height: 11px;
}

@media(width > 404px){
    h3{
        font-size: 0.8rem;
    }

    p{
        font-size: 0.6rem;
        line-height: 12px;
    }
}

@media(width > 528px){
    h3{
        font-size: 0.9rem;
    }

    p{
        font-size: 0.7rem;
        line-height: 14px;
    }
}

@media(width > 528px){
    h3{
        font-size: 0.9rem;
    }

    p{
        font-size: 0.7rem;
        line-height: 14px;
    }
}

`

