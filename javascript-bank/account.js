/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    const transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    const transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  let balance = 0;
  if (this.transactions.length <= 0) {
    return 0;
  } else {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        balance += this.transactions[i].amount;
      } else {
        balance -= this.transactions[i].amount;
      }
    }
  }
  return balance;
};
