import readlineSync from 'readline-sync';
import calc from './games/calc';
import even from './games/even';
import gcd from './games/gcd';
import prime from './games/prime';
import progression from './games/progression';

export default () => {
  const gamesLauncher = {
    1: even,
    2: calc,
    3: gcd,
    4: progression,
    5: prime,
  };

  const menuText = `\
  1: Even
  2: Calculator
  3: Greatest Common Divisor
  4: Progression
  5: Prime`;

  const askPlayer = (launcher) => {
    const games = Object.keys(launcher);
    const choice = readlineSync.question('Please enter number: ');
    if (games.indexOf(choice) === -1) {
      console.log('Wrong number, try again', '\n');
      askPlayer(launcher);
    }
    console.clear();
    launcher[choice]();
  };

  console.log('\n', 'Which game do you want to play?');
  console.log(menuText, '\n');
  askPlayer(gamesLauncher);
};
