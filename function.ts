function getSum(num1: number, num2: number, num3: number): number {
  return num1 + num2 + num3;
}

console.log(getSum(2, 4, 5));

let getName = function(firstName: string, lastName?: string): string {
  if (lastName === undefined) {
    return firstName;
  }
  return firstName + ' ' + lastName;
};

console.log(getName('Sanjay'));
