// variable: checkingAmount
// variable: savingsAmount

var checkingAmount = 0;
var savingsAmount = 0;

function depositMoneyChecking() {
// Deposit money adds into checkingAmount
// side effect: adds to specific account
// side effect: update display
// return: account balance
  var textBox = parseInt(document.querySelector("#checkingAmount").value);
  checkingAmount += textBox;
  el = document.querySelector("#checkingBalanceDiv");
  el.innerHTML = ("$" + checkingAmount);
  return checkingAmount;
}

function depositMoneySavings() {
// Deposit money adds into checkingAmount
// side effect: adds to specific account
// side effect: update display
// return: account balance
  var textBox = parseInt(document.querySelector("#savingsAmount").value);
  savingsAmount += textBox;
  el = document.querySelector("#savingsBalanceDiv");
  el.innerHTML = ("$" + savingsAmount);
  return savingsAmount;
}

function withdrawMoneySavings() {
  // function: withdrawMoney
  // Withdraw takes out
  // side effect: subtracts from specified account
  // side effect: update display
  // return: account balance
  var textBox = parseInt(document.querySelector("#savingsAmount").value);
  savingsAmount -= textBox;
  el = document.querySelector("#savingsBalanceDiv");
  el.innerHTML = "$" + savingsAmount;
  return savingsAmount;
}

function withdrawMoneyChecking() {
  // function: withdrawMoney
  // Withdraw takes out
  // side effect: subtracts from specified account
  // side effect: update display
  // return: account balance
  var textBox = parseInt(document.querySelector("#checkingAmount").value);
  checkingAmount -= textBox;
  el = document.querySelector("#checkingBalanceDiv");
  el.innerHTML = "$" + checkingAmount;
  return checkingAmount;
}

//
// add event listeners for buttons
var depositCheckingButton = document.querySelector("#checkingDepositButton");
var withdrawCheckingButton = document.querySelector("#checkingWithdrawalButton");
var depositSavingsButton = document.querySelector("#savingsDepositButton");
var withdrawSavingsButton = document.querySelector("#savingsWithdrawalButton");

depositCheckingButton.addEventListener("click", depositMoneyChecking);
withdrawCheckingButton.addEventListener("click", withdrawMoneyChecking);
depositSavingsButton.addEventListener("click", depositMoneySavings);
withdrawSavingsButton.addEventListener("click", withdrawMoneySavings);

//  pulls input from text field
//  the event listens for "click"
//  calls depositMoney or withdrawMoney function
//  specifies the account being affected
//
//
// Take input from text field
