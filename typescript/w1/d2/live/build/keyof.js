let users = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Masai" }
];
const getValue = (user, key) => {
    return user[key];
};
let response = getValue(users[1], "name");
console.log(response);
