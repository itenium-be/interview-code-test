import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageCard extends Component {
  static propTypes = {
    img: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {isFavourited: false};
  }

  favourite(img) {
    console.log('(un)favourited', img);
    this.setState({isFavourited: !this.state.isFavourited});
  }

  render() {
    const {img} = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={img.src} alt={img.alt} title={img.alt} />
        <div className="card-body">
          <h5 className="card-title">
            {img.source}
            <i
              className={(this.state.isFavourited ? 'fa' : 'far') + ' fa-star float-right'}
              title="Favourite this image"
              onClick={this.favourite.bind(this, img)}
              style={{cursor: 'pointer'}}
            />
          </h5>
          <p className="card-text">
            {img.source === 'XKCD' ? (
              <small style={{display: 'block'}}>Posted on: {img.date}</small>
            ) : null}
            {img.desc}
          </p>
        </div>
      </div>
    );
  }
}
