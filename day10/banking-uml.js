class Bank {
  constructor(code, address) {
    this.code = code;
    this.address = address;
  }

  manages() {
    //logic
  }
  maintains() {
    //logic
  }
}

class Customer extends Bank {
  constructor(name, address, dob, card_number, pin) {
    super(code, address);
  }
}

class Account extends Bank {
  constructor(number, balance) {
    super(code, address);
  }
}

class ATM extends Bank {
  constructor(location, managedby) {
    super(code, address);
  }
}

class ATM_Transaction extends Account {
  constructor(transaction_id, data, type, amount, post_balance) {}
}

class Current_account extends Account {
  constructor(acc_no, balance) {}
}
class Saving_account extends Account {
  constructor(acc_no, balance) {}
}
