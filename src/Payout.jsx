import React, { useEffect } from "react";

function Payout({ spin, balance, bets, setBalance, spinCount, bet, setWin }) {
  //values are [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
  const handleSpecialBets = (bet, value) => {
    let values = [];
    let result = 0;
    switch (value) {
      case 38:
        //2to1
        values = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        if (values.includes(spin)) {
          result += 3 * bet;
          console.log("meow ", result);
        }
        break;
      case 39:
        //2to1
        values = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        if (values.includes(spin)) {
          result += 3 * bet;
        }
        break;
      case 40:
        //2to1
        values = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        if (values.includes(spin)) {
          result += 3 * bet;
        }
        break;
      case 41:
        //1st12
        values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        if (values.includes(spin)) {
          result += 3 * bet;
        }
        break;
      case 42:
        //2nd12
        values = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        if (values.includes(spin)) {
          result += 3 * bet;
        }
        break;
      case 43:
        //3rd12
        values = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        if (values.includes(spin)) {
          result += 3 * bet;
        }
        break;
      case 44:
        //1to18
        values = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        ];
        if (values.includes(spin)) {
          result += 2 * bet;
        }
        break;
      case 45:
        //even
        values = [
          2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
        ];
        if (values.includes(spin)) {
          result += 2 * bet;
        }
        break;
      case 46:
        //red
        values = [
          1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 35, 36,
        ];
        if (values.includes(spin)) {
          result += 2 * bet;
        }
        break;
      case 47:
        //black
        values = [
          2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33,
        ];
        if (values.includes(spin)) {
          result += 2 * bet;
        }
        break;
      case 48:
        //odd
        values = [
          1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,
        ];
        if (values.includes(spin)) {
          result += 2 * bet;
        }
        break;
      case 49:
        //19-36
        values = [
          19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
          36,
        ];
        if (values.includes(spin)) {
          result += 2 * bet;
        }
        break;
    }
    return result;
  };

  const handlePayout = () => {
    let total = 0;

    //turn them all into ints
    for (const [key, row] of Object.entries(bets)) {
      bets[key] = row.map((item) => Number(item));
    }

    for (const [key, row] of Object.entries(bets)) {
      let uniqueBets = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];

      //pass them through homie
      const filteredUniqueBets = row.filter((item) => {
        uniqueBets.includes(item);
        const result = handleSpecialBets(key, item);
        total += result;
      });

      //just for the numbers 0-36
      const filteredBets = row.filter((item) => {
        return item === spin;
      });

      if (filteredBets.length) {
        total += filteredBets.length * Number(key) * 36;
      }
    }
    setBalance(balance + total);
    setWin(total);
  };

  useEffect(() => {
    handlePayout();
  }, [spinCount]);
  return <div></div>;
}

export default Payout;
