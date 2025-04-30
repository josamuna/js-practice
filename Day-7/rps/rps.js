/**
 * The Rock 🏔️, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function rockPaperScissorsGame() {
  let objChoice = { rock: 'rock', paper: 'paper', scissors: 'scissors' };
  console.log(
    'Getting Started With the Rock 🏔️, Paper 🧻, or Scissors ✂️ Game.'
  );
  const userPrompt = prompt(
    'Please choice between Rock 🏔️, Paper 🧻, or Scissors ✂️ to proceed with the game.'
  );

  // The gane will only work once the value typed is valid (rock, paper oer scissors).
  if (userPrompt?.toLowerCase() in objChoice) {
    let computerChoice;
    const userChoice = userPrompt.toLowerCase();

    const randomNumber = Math.floor(Math.random() * 3) + 1; // Random number between 1 an 3 to match choose of Rock 🏔️, Paper 🧻 or Scissors ✂️.
    switch (randomNumber) {
      case 1:
        computerChoice = objChoice.rock;
        break;
      case 2:
        computerChoice = objChoice.paper;
        break;
      case 3:
        computerChoice = objChoice.scissors;
    }
    console.log('User has choosen ', userChoice.toString()); // Prevent nullable value
    console.log('Computer has choosen ', computerChoice);

    // Performing comparison of choose to determine the winner
    if (userChoice === computerChoice) {
      console.log('No winner, choices are tied!');
    } else if (
      (userChoice === objChoice.rock &&
        computerChoice === objChoice.scissors) ||
      (userChoice === objChoice.paper && computerChoice === objChoice.rock) ||
      (userChoice === objChoice.scissors && computerChoice === objChoice.paper)
    ) {
      console.log('User, you are the winner!');
    } else if (
      (computerChoice === objChoice.rock && userChoice === objChoice.paper) ||
      (computerChoice === objChoice.paper &&
        userChoice === objChoice.scissors) ||
      (computerChoice === objChoice.scissors && userChoice === objChoice.rock)
    ) {
      console.log('Computer is the winner!');
    }
  } else {
    console.log(
      'You have made a wrong choice, please try again and choose rock, paper or scissors!'
    );
  }

  let retryAgain;
  do {
    const promptContinue = prompt('Do you want to continue playing? (yes/no).');
    retryAgain = promptContinue ? promptContinue?.toLowerCase() : 'no';

    if (retryAgain === 'yes') {
      // retry the game
      rockPaperScissorsGame();
    } else if (retryAgain === 'no') {
      console.log('Thank you for playing! See you next time.');
    } else {
      console.log('Invalid input, please retry!');
    }
  } while (retryAgain !== 'no' && retryAgain !== 'yes');
}

// Start This Game
rockPaperScissorsGame();
