import styled from "styled-components";

export const Main = styled.main`
  background-color: #a15858;
  min-height: 91vh;
  padding: 34px;
  div {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 0 auto;
    height: 90%;
    width: 90%;
    border-radius: 8px;
    background-image: url("https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e1a4dd124126853.Y3JvcCwzNTA4LDI3NDMsMCwyNDky.jpg");
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 15px 0;


    @media (min-width: 700px) {
      height: 500px;
      width: 60%;
     
    }
  }
`;
export const articleInfo = styled.article`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 0 auto;
  width: 90%;
  height: 330px;
  padding: 12px;

  background: rgba(232, 77, 77, 0.65);
  color: #ffffff;
  border-radius: 20px;

  transform: rotate(-0.12deg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 700px) {
    width: 90%;
    max-width: 500px;
    height: 250px;

    padding: 0 25px;
    
  }
`;
