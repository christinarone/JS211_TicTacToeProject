'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];



// let handleClick = () => {
  // check to see if the inner html function is empty
  // if it is empty
  // add a marker "X" or "O" to both the board & GUI "screen user is interacting with; the one we see"
  // check for win
  // change player
// } 


// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';


// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// function checkForWin(){
// if (winner == null && avaiable.length ==0) {
// console.log('tie');
// } else {
// console.log(winner);
// }
// }

const changeMarker = () => {
  // change playerTurn from X to O or from O to X
  if (playerTurn is X){
    playerTurn = O
  }else if (playerTurn is O){
    playerTurn = X
  }
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  for (let i = 0; i < 3; i++){
    if (board[i][0] == board[i][1] == board[i][2]){
      return true
    }
  }
}

const verticalWin = () => {
  // Your code here to check for vertical wins
  for (let i = 0; i < 3; i++){
    if (board[0][i] == board[1][i] == board[2][i]) {
    return true
    }
  }
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if (board[0][0] == board[1][1] == board[0][2]){
    return true
  }
  if (board[2][0] == board[1][1] == board[0][2]){
    return true
  }
}

const checkForWin = () => {
  // Your code here call each of the check for types of wins
  if (horizontalWin() || verticalWin() || diagonalWin()){
    console.log("congrats,you won!")
    return true
  }else{
    // no win
    changeMarker()
  }

const addMarker = () => {
  if (chosen space is empty){
    add playerTurn to the board
  }else{
    no new marker on board
    return
  } 
}


const ticTacToe = (row, column) => {
  addMarker();
  checkForWin();
  
  
  // it will add a marker 
  // write a function "addMarker" and check for a win
  // if ()
  // now, check to see if someone wins.
  // if true, do this (console.log "congrats, you won!")
  // now, change the current player from "X" to "O" 
  // just write it one time.
  // missing DOM interaction; make sure HTML & JS are linked; onclick why isn't it working; not linked to correct function
}

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      ticTacToe(0, 0)
      ticTacToe(0, 1)
      ticTacToe(1, 1)
      ticTacToe(0, 2)
      ticTacToe(2, 2)
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
}