import request from 'superagent';

function getRandomUnsplash() {
  return request.get(`https://aws.random.cat/meow`);
}

function getRandomXkcd() {
  return request.get(`http://localhost:5000/api/xkcd`);
}

export function getImages() {
  return Promise.all([
    getRandomUnsplash(),
    getRandomXkcd(),
  ])
  .then(responses => responses.map(res => res.body))
  .then(images => {
    console.log('imgz', images);

    return [
      {source: 'Unsplash', src: images[0].file},
      {source: 'XKCD', src: images[1].img, alt: images[1].alt, desc: images[1].transcript, date: `${images[1].day}/${images[1].month}/${images[1].year}`},
    ];
  });
}


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
