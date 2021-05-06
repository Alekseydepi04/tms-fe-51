let login = prompt("Enter login");
let password = prompt("Enter password");

let savedLogin = 'login';
let savedPassword = 'password';

let message = login === savedLogin && password === savedPassword ? 'Welcome' : 'Login or password is incorrect!';
alert(message);

