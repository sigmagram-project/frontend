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
      const handleClick = async () => {
          try {
              let updatedLikeCount;

              if (liked) {
                  updatedLikeCount = await unlikeImage(image.id);
                  setLiked(false);
              } else {
                  updatedLikeCount = await likeImage(image.id);
                  setLiked(true);
              }

              setLikeCount(updatedLikeCount);
          } catch (error) {
              console.error("Failed to update like:", error);
          }
      };
  };

  return (
      <button className={liked ? 'like-btn liked' : 'like-btn'} onClick={handleClick}>
          <svg className="heart" viewBox="0 0 24 24" width="22" height="22"
               fill={liked ? '#ed4956' : 'none'} stroke={liked ? '#ed4956' : '#262626'} strokeWidth="2">
              <path d="M12 21s-6.7-4.3-9.5-8.1C.6 10 1 6.5 3.6 4.9c2.2-1.3 4.8-.7 6.4 1.1L12 8l2-2c1.6-1.8 4.2-2.4 6.4-1.1 2.6 1.6 3 5.1 1.1 8-2.8 3.8-9.5 8.1-9.5 8.1z"/>
          </svg>
          <span className="like-count">{likeCount}</span>
      </button>
  );
}
