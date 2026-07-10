import { useEffect, useState } from 'react';
import { fetchImages, imageDataUrl } from '../api/client.js';
import ImageCard from './ImageCard.jsx';

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // TODO (Task 1 - frontend): call fetchImages() from ../api/client.js and
    // store the result in state (setImages) so the grid below can render it.
    // Don't forget to handle the case where the request fails (e.g. .catch()).
  }, []);

  return (
      <div className="gallery">
        {images.map((image) => (
            <ImageCard key={image.id} image={image} imageUrl={imageDataUrl(image.id)} />
        ))}
      </div>
  );
}