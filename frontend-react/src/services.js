import request from 'superagent';

export function login(email, password) {
  return request
    .post('http://localhost:5000/api/login')
    .send({email, password})
    //.set('Authorization', 'Bearer xxx')
    .set('accept', 'json')
    .then((err, res) => {
      console.log('OK', err, res);
      return true;
    }, reason => {
      console.log('ERROR', reason);
      return false;
    });
}
