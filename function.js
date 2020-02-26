function getSum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(getSum(2, 4, 5));
var getName = function (firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
};
console.log(getName('Sanjay'));
