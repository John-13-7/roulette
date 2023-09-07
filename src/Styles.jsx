import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background: rgba(
    250,
    250,
    250,
    0.9
  ); 
  }
`;

export const RouletteGameDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Open-sans", sans-serif;
  margin-top: 1rem;

  .balance-wrapper {
    height: 9rem;
    width: 14rem;
    margin-top: 1rem;
    border: 1px solid lightgray;
    box-shadow: 0px 0px 10px lightgray;
    padding: 0.5rem;
    background-color: white;
    display: flex;
    align-items: center;
    border: 2px solid #0275d8;
    border-radius: 8px;
  }

  .button-wrapper {
    margin-top: 1rem;
    border: 1px solid lightgray;
    box-shadow: 0px 0px 10px lightgray;
    padding: 1rem;
    background-color: white;
    display: flex;
    justify-content: center;
    border: 2px solid #000000;
    border-radius: 8px;
  }

  .bet-wrapper {
    height: 2rem;
    width: 25rem;
    overflow: auto;
    overflow-y: hidden;
    margin-top: 0.5rem;
    border: 1px solid lightgray;
    box-shadow: 0px 0px 10px lightgray;
    padding: 0.5rem;
    background-color: white;
    display: flex;
    text-align: center;
    align-items: center;
    border: 2px solid #0275d8;
    border-radius: 8px;
    h4 {
      margin-right: 0.25rem;
    }
    h3 {
      margin-right: 0.25rem;
    }

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px; /* Height is relevant when you have vertical scroll */
    }

    ::-webkit-scrollbar-thumb {
      background: #0275d8;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #0056b3;
    }
  }

  .add-funds {
    button {
      margin-right: 0.25rem;
      cursor: pointer;
      height: 3rem;
      width: 3rem;
    }
  }

  .button-costs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .active {
      background-color: yellow;
    }
    button {
      margin-right: 0.25rem;
      cursor: pointer;
      height: 4rem;
      width: 4rem;
    }
  }
  .roulette-wheel {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      border: 4px solid white;
      border-radius: 50%;
      width: 25rem;
      height: 25rem;
    }
  }
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 2rem;
  }
`;
export const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 55px);
  grid-template-rows: repeat(5, 55px);
  margin-top: 1rem;

  .button-container {
    background-color: #3ba53b;
    width: 100%;
    height: 100%;
    border: 2px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      .individual-button {
        background-color: #4cc84c;
        border: 3px solid white;
      }
      grid-column: 1 / 2;
      grid-row: 1 / span 2;
    }
    &:nth-child(2) {
      grid-column: 2;
      grid-row: 3;
    }
    &:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(4) {
      grid-column: 2;
      grid-row: 1;
    }
    &:nth-child(5) {
      .individual-button {
        background-color: black;
      }
      grid-column: 3;
      grid-row: 3;
    }
    &:nth-child(6) {
      grid-column: 3;
      grid-row: 2;
    }
    &:nth-child(7) {
      .individual-button {
        background-color: black;
      }
      grid-column: 3;
      grid-row: 1;
    }
    &:nth-child(8) {
      grid-column: 4;
      grid-row: 3;
    }
    &:nth-child(9) {
      grid-column: 4;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(10) {
      grid-column: 4;
      grid-row: 1;
    }
    &:nth-child(11) {
      grid-column: 5;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(12) {
      grid-column: 5;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(13) {
      grid-column: 5;
      grid-row: 1;
    }
    &:nth-child(14) {
      grid-column: 6;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(15) {
      grid-column: 6;
      grid-row: 2;
    }
    &:nth-child(16) {
      grid-column: 6;
      grid-row: 1;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(17) {
      grid-column: 7;
      grid-row: 3;
    }
    &:nth-child(18) {
      grid-column: 7;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(19) {
      grid-column: 7;
      grid-row: 1;
    }
    &:nth-child(20) {
      grid-column: 8;
      grid-row: 3;
    }
    &:nth-child(21) {
      grid-column: 8;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(22) {
      grid-column: 8;
      grid-row: 1;
    }
    &:nth-child(23) {
      grid-column: 9;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(24) {
      grid-column: 9;
      grid-row: 2;
    }
    &:nth-child(25) {
      grid-column: 9;
      grid-row: 1;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(26) {
      grid-column: 10;
      grid-row: 3;
    }
    &:nth-child(27) {
      grid-column: 10;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(28) {
      grid-column: 10;
      grid-row: 1;
    }
    &:nth-child(29) {
      grid-column: 11;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(30) {
      grid-column: 11;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(31) {
      grid-column: 11;
      grid-row: 1;
    }
    &:nth-child(32) {
      grid-column: 12;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(33) {
      grid-column: 12;
      grid-row: 2;
    }
    &:nth-child(34) {
      grid-column: 12;
      grid-row: 1;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(35) {
      grid-column: 13;
      grid-row: 3;
    }
    &:nth-child(36) {
      grid-column: 13;
      grid-row: 2;
    }
    &:nth-child(37) {
      grid-column: 13;
      grid-row: 1;
    }
    //00
    &:nth-child(38) {
      .individual-button {
        border: 3px solid white;
        background-color: #4cc84c;
      }
      grid-column: 1;
      grid-row: 3 / span 2;
    }
    &:nth-child(39) {
      grid-column: 14;
      grid-row: 3;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(40) {
      grid-column: 14;
      grid-row: 2;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(41) {
      grid-column: 14;
      grid-row: 1;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    //1st 12
    &:nth-child(42) {
      grid-column: 2 / span 4;
      grid-row: 4;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(43) {
      grid-column: 6 / span 4;
      grid-row: 4;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(44) {
      grid-column: 10 / span 4;
      grid-row: 4;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(45) {
      grid-column: 2 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(46) {
      grid-column: 4 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(47) {
      grid-column: 6 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: red;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(48) {
      grid-column: 8 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: black;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(49) {
      grid-column: 10 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(50) {
      grid-column: 12 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
  }

  .individual-button {
    font-family: "Open-sans", sans-serif;
    width: 45px;
    height: 45px;
    color: white;
    background-color: red;
    font-size: 1rem;
    border-radius: 50%;
    border: 2px solid black;
    cursor: pointer;
  }
`;
