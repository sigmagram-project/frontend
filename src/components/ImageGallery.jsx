import { useEffect, useState } from 'react';
import { fetchImages, imageDataUrl } from '../api/client.js';
import ImageCard from './ImageCard.jsx';

export default function ImageGallery({ refreshKey }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages()
        .then(setImages)
        .catch((err) => console.error('Failed to load images', err));
  }, [refreshKey]);

  return (
      <div className="gallery">
        {images.map((image) => (
            <ImageCard
                key={image.id}
                image={image}
                imageUrl={imageDataUrl(image.id)}
            />
        ))}
      </div>
  );
}