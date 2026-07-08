import { useState } from 'react';
import { uploadImage } from '../api/client.js';

/**
 * =========================================================================
 * TASK 1: Upload an image and display it in the frontend (upload half)
 * =========================================================================
 * Pairs with ImageGallery.jsx, which handles the "display" half.
 */
export default function ImageUpload({ onUploaded }) {
  const [file, setFile] = useState(null);

  // ---------------------------------------------------------------
  // ===== PLACEHOLDER: FRONTEND TEAM =====
  // TODO (Task 1 - frontend):
  //   1. On submit, call uploadImage(file) from ../api/client.js.
  //   2. Show a loading/error state while the request is in flight.
  //   3. On success, notify the parent (e.g. call onUploaded()) so the
  //      gallery refreshes, or trigger a refetch directly.
  // ======================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: implement
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 24 }}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button type="submit" disabled={!file}>
        Upload
      </button>
    </form>
  );
}
