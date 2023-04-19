/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance) === true) {
    const acc = new Account(this.nextAccountNumber, holder);
    acc.deposit(balance);
    this.accounts.push(acc);
    this.nextAccountNumber++;
    return acc.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (numbers) {
  if (numbers > this.accounts.length) {
    return null;
  }
  for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === numbers) {
      return this.accounts[i];
    }
  }
};

Bank.prototype.getTotalAssets = function () {
  let total = 0;
  if (this.accounts.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].getBalance();
    }
  }
  return total;
};
