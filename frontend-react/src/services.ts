import request from 'superagent';
import { IImage } from './models';


function getRandomXkcd(): Promise<any> {
  return request.get(`http://localhost:5000/api/xkcd`);
}

export function getImages(): Promise<IImage[]> {
  return Promise.all([
    getRandomXkcd(),
  ])
  .then(responses => responses.map(res => res.body))
  .then(images => {
    console.log('imgz', images);

    return [
      {source: 'Unsplash', src: 'https://picsum.photos/200'},
      {source: 'XKCD', src: images[0].img, alt: images[0].alt, desc: images[0].transcript, date: `${images[0].day}/${images[0].month}/${images[0].year}`},
    ];
  });
}


export function login(email: string, password: string): Promise<boolean> {
  return request
    .post('http://localhost:5000/api/login')
    .send({email, password})
    .set('accept', 'json')
    .then(value => {
      console.log('OK', value);
      return true;
    }, reason => {
      console.log('ERROR', reason);
      return false;
    });
}
