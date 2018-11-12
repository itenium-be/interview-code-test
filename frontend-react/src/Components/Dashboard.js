import React, { Component } from 'react';
import { getImages } from '../services.js';
import { ImageCard } from './ImageCard.js';

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {images: []};
  }

  componentDidMount() {
    getImages().then(images => {
      console.log('images', images);
      this.setState({images});
    });
  }

  render() {
    return (
      <div>
        <h2>Delayed Kilo</h2>
        <div className="row">
          {this.state.images.map(img => (
            <div className="col-md-6" key={img.src}>
              <ImageCard img={img} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
