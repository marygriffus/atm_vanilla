// variable: checkingAmount
// variable: savingsAmount
//Branched!

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
  checkZero();
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
  saveZero();
  return savingsAmount;
}

function withdrawMoneySavings() {
  // function: withdrawMoney
  // Withdraw takes out
  // side effect: subtracts from specified account
  // side effect: update display
  // return: account balance
  var textBox = parseInt(document.querySelector("#savingsAmount").value);
  if (textBox <= savingsAmount){
    savingsAmount -= textBox;
  }
  else {
    alert("Go ask Dad.  Click OK.");
  }
  el = document.querySelector("#savingsBalanceDiv");
  el.innerHTML = "$" + savingsAmount;
  saveZero();
  return savingsAmount;
}

function withdrawMoneyChecking() {
  // function: withdrawMoney
  // Withdraw takes out
  // side effect: subtracts from specified account
  // side effect: update display
  // return: account balance
  var textBox = parseInt(document.querySelector("#checkingAmount").value);
  if (textBox <= checkingAmount){  // This happens if there is enough to withdraw.
    checkingAmount -= textBox;
  }
  else if (textBox > checkingAmount && textBox <= savingsAmount + checkingAmount){
    textBox -= checkingAmount;    // This happens if the savings account can help.
    checkingAmount = 0;
    savingsAmount -= textBox;
    alert("Be careful.  Taking extra cash from savings now.");
    el = document.querySelector("#savingsBalanceDiv");
    el.innerHTML = "$" + savingsAmount;
    saveZero();
  }
  else {
    alert("Go ask Dad.  Click OK.");  // This happens if you're BROKE.
  }
  el = document.querySelector("#checkingBalanceDiv");
  el.innerHTML = "$" + checkingAmount;
  checkZero();
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

function checkZero(){
  if (checkingAmount === 0){
    el = document.querySelector("#checkingBalanceDiv")
    el.classList.add("zero");
  }
  else {
    el = document.querySelector("#checkingBalanceDiv")
    el.classList.remove("zero")
  }
}

function saveZero(){
  if (savingsAmount === 0){
    el = document.querySelector("#savingsBalanceDiv")
    el.classList.add("zero");
  }
  else {
    el = document.querySelector("#savingsBalanceDiv")
    el.classList.remove("zero")
  }
}
// Overdraft protection
//
//If the withdrawal amount is greater than what's left in the checking account, it needs to draw from savings.
//If it
