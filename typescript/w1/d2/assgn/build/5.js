let arr = [];
function PhoneBook(arg) {
    arr.push(arg);
}
PhoneBook({ personName: "alok", phoneNumber: 7272, married: true });
PhoneBook({ personName: "vishal", phoneNumber: 7272, married: true });
console.log(arr);
