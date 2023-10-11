import sanitizeHtml from './sanitizeHTML.js'
// const personalKey = '';
const baseHost = '	https://skypro-music-api.skyeng.tech/user/';
//const postsHost = ``;


// Регистрация
export function registerUser({ login, password, name, imageUrl }) {
  return fetch(baseHost + 'signup/', {
    method: 'POST',
    body: JSON.stringify({
      login: sanitizeHtml(login),
      password: sanitizeHtml(password),
      name: sanitizeHtml(name),
      imageUrl
    })
  }).then((response) => {
    if (response.status === 400) {
      throw new Error('Такой пользователь уже существует');
    }
    return response.json();
  });
}

//Авторизация
export function loginUser({ login, password }) {
  return fetch(baseHost + '/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      login: sanitizeHtml(login),
      password: sanitizeHtml(password)
    })
  }).then((response) => {
    if (response.status === 400) {
      throw new Error('Неверный логин или пароль');
    }
    return response.json();
  });
}
