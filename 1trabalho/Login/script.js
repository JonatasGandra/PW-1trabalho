const user = document.querySelector('#usuario')
const senha = document.querySelector('#senha')
const erroLogin = document.querySelector('#erro')
const login = document.querySelector('#login')

window.alert('o usuario é jotinha e a senha é jonataspw')

login.addEventListener('click', fazerLogin)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
      fazerLogin();
  }
});

user.addEventListener('focus', function() {
    user.style.borderColor = 'transparent';
    senha.style.borderColor = 'transparent';
    erroLogin.innerHTML = '';

  });
  
  senha.addEventListener('focus', function() {
    senha.style.borderColor = 'transparent';
    user.style.borderColor = 'transparent';
    erroLogin.innerHTML = '';

  });
  

function fazerLogin() {
    if (user.value == 'jotinha' && senha.value == 'jonataspw') {
        window.location.href = '../main/index.html';

    } else {
        erroLogin.innerHTML = 'preencha os campos corretamente';
        user.style.borderColor = 'red';
        senha.style.borderColor = 'red';

    }
}

