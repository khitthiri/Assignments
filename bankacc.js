let balance = 5000;
const transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];

function getBalance() {
    return balance;
}

function deposit(amount) {
    var depositAmt = prompt('How much would you like to deposit?');
  depositAmt = Number(depositAmt);
  balance = depositAmt + balance;

  return balance;
}


function withdraw(amount) {
    var withdrawAmt = prompt('How much would you like to withdraw?');
  withdrawAmt = Number(withdrawAmt);
  balance = balance - withdrawAmt;

  return balance;
}

function getTransactionHistory() {
  return transactionHistory;
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

console.log(getTransactionHistory());
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/