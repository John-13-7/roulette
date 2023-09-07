import React, { useEffect, useState } from "react";
import roulette2 from "./roulette2.png";
import { RouletteGameDiv, StyledBoard } from "./Styles";
import Payout from "./Payout";
import { BiSolidDownArrow } from "react-icons/bi";

function Roulette() {
  //note to self, key value would have been much readable
  const [rouletteValues, setRouletteValues] = useState([
    0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37,
    27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2,
  ]);
  const [spin, setSpin] = useState(0);
  const [degree, setDegree] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bet, setBet] = useState(0);
  const [cost, setCost] = useState(1);
  const boardButtons = Array.from(Array(50).keys());
  const [balance, setBalance] = useState(0);
  const [isSpun, setIsSpun] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [win, setWin] = useState(0);

  const getDisplayValue = (bet) => {
    console.log("get", bet);
    switch (bet) {
      case "38":
        return "R1";
      case "39":
        return "R2";
      case "40":
        return "R3";
      case "41":
        return "1st12";
      case "42":
        return "2nd12";
      case "43":
        return "3rd12";
      case "44":
        return "1to18";
      case "45":
        return "Evn";
      case "46":
        return "Red";
      case "47":
        return "Blk";
      case "48":
        return "Odd";
      case "49":
        return "19-36";
      default:
        return bet;
    }
  };

  const buttonDisplayText = {
    37: "00",
    38: "2 to 1",
    39: "2 to 1",
    40: "2 to 1",
    41: "1st 12",
    42: "2nd 12",
    43: "3rd 12",
    44: "1 to 18",
    45: "EVEN",
    46: "RED",
    47: "BLACK",
    48: "ODD",
    49: "19-36",
  };
  const [bets, setBets] = useState({
    1: [],
    5: [],
    10: [],
    25: [],
  });
  const [activeButton, setActiveButton] = useState({
    1: "active",
    5: "",
    10: "",
    25: "",
  });

  //handles changing bet cost buttons
  const handleCost = (cost) => {
    setCost(cost);
    setActiveButton({
      1: "",
      5: "",
      10: "",
      25: "",
      [cost]: "active", // Add "active" class to the clicked button
    });
  };

  const getSpin = () => {
    if (bet <= balance && bet !== 0) {
      setBalance((prevBalance) => prevBalance - bet);
      setIsAnimating(true);
      const numSpins = Math.floor(Math.random() * 4) + 2;
      const spinInterval = setInterval(() => {
        setDegree((degree) => (degree + 30) % 360);
      }, 50);
      setTimeout(() => {
        clearInterval(spinInterval);
        const newNum = Math.floor(Math.random() * 38);
        setSpin(rouletteValues[newNum]);
        console.log("spin in getspin: ", spin);
        const newDegree = Math.floor(-9.47 * newNum);
        setDegree(newDegree);
        setIsAnimating(false);
        setSpinCount((prevCount) => prevCount + 1);
      }, numSpins * 500);
    } else {
      //insufficient funds popup
    }
  };

  //roulette value changes
  useEffect(() => {
    setIsSpun(true);
  }, [spinCount]);

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
    setBets({ 1: [], 5: [], 10: [], 25: [] });
    setBet(0);
  };

  const updateWin = (newWin) => {
    setWin(newWin);
  };

  const handleBet = (key) => {
    setBet((prev) => prev + key);
  };

  return (
    <RouletteGameDiv>
      <div className="container">
        <div className="roulette-wheel">
          <BiSolidDownArrow />
          <img
            src={roulette2}
            className="wheel"
            style={{
              transform: `rotate(${degree}deg)`,
              animationPlayState: isAnimating ? "running" : "paused",
            }}
          ></img>
        </div>
        <div className="button-wrapper">
          <div className="add-funds">
            <button onClick={() => setBalance((prev) => prev + 100)}>
              Add 100$
            </button>
            <button onClick={() => setBalance((prev) => prev + 500)}>
              Add 500$
            </button>
            <button onClick={() => setBalance((prev) => prev + 9000)}>
              Add 9000$
            </button>
          </div>
        </div>
        <div className="balance-wrapper">
          <div className="button-cost">
            <h3>Balance: {balance}$</h3>
            <h3>Total Bet: {bet}$</h3>
            <h3>Spin: {spin}</h3>
            <h3>Win: {win}$</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <StyledBoard>
          {boardButtons.map((b, index) => (
            <div className="button-container" key={index}>
              <button
                id={index}
                disabled={isAnimating}
                className="individual-button"
                onClick={(e) => {
                  handleBet(cost);
                  setBets((prevBets) => ({
                    ...prevBets,
                    [cost]: [...prevBets[cost], e.target.id],
                  }));
                }}
              >
                {buttonDisplayText[b] || b}
              </button>
            </div>
          ))}
        </StyledBoard>
        <div className="button-wrapper">
          <div className="button-costs">
            <button
              onClick={() => {
                setBets({ 1: [], 5: [], 10: [], 25: [] });
                setBet(0);
              }}
            >
              Clear bets
            </button>
            <button className={activeButton[1]} onClick={() => handleCost(1)}>
              Bet 1
            </button>
            <button className={activeButton[5]} onClick={() => handleCost(5)}>
              Bet 5
            </button>
            <button className={activeButton[10]} onClick={() => handleCost(10)}>
              Bet 10
            </button>
            <button className={activeButton[25]} onClick={() => handleCost(25)}>
              Bet 25
            </button>
            <button className="spin" onClick={getSpin}>
              SPIN!
            </button>
          </div>
        </div>
        <div>
          {Object.entries(bets).map(([key, value]) => (
            <div className="bet-wrapper" key={key}>
              <h3>{key}$</h3>
              {value.map((bet, index) => (
                <h4 key={index}>{getDisplayValue(bet)},</h4>
              ))}
            </div>
          ))}
        </div>
      </div>
      {isSpun && (
        <Payout
          spin={spin}
          balance={balance}
          bets={bets}
          setBalance={updateBalance}
          spinCount={spinCount}
          bet={bet}
          setWin={updateWin}
        />
      )}
    </RouletteGameDiv>
  );
}

export default Roulette;
