interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  register() {
    console.log(this.name + ' has been registered');
  }

  payInvoice() {
    console.log(this.name + ' paid the invoice');
  }
}

// let john = new User('John Doe', 'john@gmail.com', 34);
// console.log(john.age);
// console.log(john.register());

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}

const member: User = new Member(
  1,
  'Sanjay Magar',
  'sanjaylafamagar4@gmail.com',
  22
);
console.log(member.register());
console.log(member.payInvoice());
