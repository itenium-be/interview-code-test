import request from 'superagent';

export function login(email, password) {
  console.log('LOGIN', email, password);
  return Promise.resolve(true);
}
