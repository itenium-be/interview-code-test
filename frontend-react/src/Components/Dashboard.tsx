import React, { useState, useEffect } from 'react';
import { getImages } from '../services';
import { ImageCard } from './ImageCard';
import { IImage } from '../models';

export const Dashboard = () => {
  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    getImages().then(images => {
      console.log('images', images);
      setImages(images);
    });
  }, []);

  return (
    <div>
      <h2>Delayed Kilo</h2>
      <div className="row">
        {images.map(img => (
          <div className="col-md-6" key={img.src}>
            <ImageCard img={img} />
          </div>
        ))}
      </div>
    </div>
  );
}
