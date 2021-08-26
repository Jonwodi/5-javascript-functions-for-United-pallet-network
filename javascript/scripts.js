/* Task 1
Create a function that will halve a given number.
  Task 2
Create a function that will multiply two numbers together and add 3.
Task 3
Create a function to calculate how many times 1000 needs to be halved to be less than 10.
You can use any functions you created from previous tasks.
  Task 4
Create a function that accepts an array of numbers and returns an array that has had all
values above a given number removed.
  Task 5
Create a function to determine the winner of this card game.
Two players are dealt five cards from a standard deck.The winner is the player with the best
Hand.Winning hands are based on the ranks only(ignore the suit) and are as follows (best
at the top):
Four of a kind: Four cards of the same rank.
Full House: Three cards of the same rank, and two cards of a different matching rank.
  Straight: Five cards in sequence.
Three of a kind: Three cards of the same rank.
Two pair: Two cards of a matching rank and another two cards of a different matching rank.
One pair: Two cards of a matching rank.
If both players have none of the above, it is a draw.
If both players have the same type of hand, it is a draw.
Your function should accept the names of both players and an array of integers
  (representing the rank, where A = 1, J = 11, Q = 12, K = 13) for each player’s hand.Your function
  should return the name of the winning player, or “draw” if there is no winner.You may write
other supporting functions. */


// Task 1
function halveNumber() {
  var number = 20;
  return number / 2;
}

console.log(halveNumber());


// Task 2
function multiplyAndAddNumber() {
  var multiply_and_add_number = 6 * 2 + 3;
  return multiply_and_add_number;
}

console.log(multiplyAndAddNumber());


//Task 3


// Task 4
function numberArray() {
  var number_array = [1, 3, 5, 7, 9];
  return number_array[4];
}

console.log(numberArray());


//Task 5 
