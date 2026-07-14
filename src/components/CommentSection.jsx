import { useEffect, useState } from 'react';
import { addComment, fetchComments } from '../api/client.js';

/**
 * =========================================================================
 * Comment on the image
 * =========================================================================
 */
export default function CommentSection({ imageId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  // ---------------------------------------------------------------
  // ===== PLACEHOLDER: FRONTEND TEAM (Task 3) =====
  // ======================================
    useEffect(() => {
        // TODO:
        // Call fetchComments(imageId).
        // Store the returned comments with setComments(...).
        // Handle errors with .catch(...).
    }, [imageId]);

  // ---------------------------------------------------------------
  // ===== PLACEHOLDER: FRONTEND TEAM (Task 3) =====
  // ======================================
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) {
            return;
        }
        try {
            // TODO:
            // Call addComment(imageId, text).
            // Add the returned comment to comments.
            // Clear the input.
        } catch (error) {
            console.error('Failed to add comment', error);
        }
    };

  return (
    <div>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit" disabled={!text.trim()}>
          Post
        </button>
      </form>
    </div>
  );
}
