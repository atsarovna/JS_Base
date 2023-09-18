// получение имени по внешней переменной 

// let userName = prompt('Введите имя: ');
// function greeting(userName) {
//  let message = 'Привет, ' + userName;
//  alert(message);
// }
// greeting();

// передача имени внутри функции

const userName = prompt('Введите имя: ');
function greeting(userName) {
 const message = `Привет, ${userName}`;
 return message;
}
console.log(greeting(userName));