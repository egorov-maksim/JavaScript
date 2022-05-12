//Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

'use strict'
const fs = require('fs');
let rawUsers = fs.readFileSync('task2.json');
let users = JSON.parse(rawUsers)


let uniqueUsers = users.reduce((unique, user) => {
    if (unique.map[user.name])
    return unique;

    unique.map[user.name] = true;
    unique.uniqueUsers.push(user);
    return unique;
},
{
    map: {}, // checked users
    uniqueUsers:[] //final massive with unique 'name'
})
.uniqueUsers;
console.log(uniqueUsers);