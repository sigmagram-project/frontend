import { useEffect, useState } from 'react';
import { fetchImages, imageDataUrl } from '../api/client.js';
import ImageCard from './ImageCard.jsx';

/**
 * =========================================================================
 * TASK 1: Upload an image and display it in the frontend (display half)
 * =========================================================================
 */
export default function ImageGallery() {
  const [images, setImages] = useState([]);

  // ---------------------------------------------------------------
  // ===== PLACEHOLDER: FRONTEND TEAM =====
  // TODO (Task 1 - frontend):
  //   On mount (and after a new upload), call fetchImages() from
  //   ../api/client.js and store the result in state so the grid below
  //   renders the uploaded images via imageDataUrl(image.id).
  // ======================================
  useEffect(() => {
    // TODO: implement
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} imageUrl={imageDataUrl(image.id)} />
      ))}
    </div>
  );
}
