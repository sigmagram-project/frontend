import { useState } from 'react';
import { likeImage, unlikeImage } from '../api/client.js';

/**
 * =========================================================================
 * TASK 2: Like and unlike the image
 * =========================================================================
 * There's no login, so "has this visitor already liked this image" needs
 * to be tracked client-side (e.g. in local component state, or persisted
 * across reloads via localStorage keyed by image id -- your call).
 */
export default function LikeButton({ image }) {
  const [likeCount, setLikeCount] = useState(image.likeCount);
  const [liked, setLiked] = useState(false);

  // ---------------------------------------------------------------
  // ===== PLACEHOLDER: FRONTEND TEAM =====
  // TODO (Task 2 - frontend):
  //   1. On click, call likeImage(image.id) or unlikeImage(image.id)
  //      from ../api/client.js depending on current `liked` state.
  //   2. Update `likeCount` and `liked` from the response.
  //   3. Handle errors (e.g. network failure) gracefully.
  // ======================================
  const handleClick = async () => {
    // TODO: implement
  };

  return (
    <button onClick={handleClick}>
      {liked ? 'Unlike' : 'Like'} ({likeCount})
    </button>
  );
}
