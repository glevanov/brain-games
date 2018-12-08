import readlineSync from 'readline-sync';
import calc from './games/calc';
import even from './games/even';
import gcd from './games/gcd';
import prime from './games/prime';
import progression from './games/progression';

export default () => {
  const games = {
    1: even,
    2: calc,
    3: gcd,
    4: progression,
    5: prime,
  };

  const askPlayer = () => {
    const choice = readlineSync.question('Please enter number ');
    if (Object.keys(games).indexOf(choice) === -1) {
      console.log('Wrong number, try again');
      askPlayer();
    }
    console.log('\n');
    games[choice]();
  };

  console.log('Which game do you want to play?\n\n');
  console.log(`1: Even
  2: Calculator
  3: Greatest Common Divisor
  4: Progression
  5: Prime`);
  askPlayer();
};
