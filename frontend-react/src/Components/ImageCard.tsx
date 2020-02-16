import React, { useState } from 'react';
import { IImage } from '../models';

type ImageCardProps = {
  img: IImage;
}

export const ImageCard = ({img}: ImageCardProps) => {
  const [fav, setFav] = useState<boolean>(false);

  return (
    <div className="card">
      <img className="card-img-top" src={img.src} alt={img.alt} title={img.alt} />
      <div className="card-body">
        <h5 className="card-title">
          {img.source}
          <i
            className={(fav ? 'fa' : 'far') + ' fa-star float-right'}
            title="Favourite this image"
            onClick={() => setFav(!fav)}
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
