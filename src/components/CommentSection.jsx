import { useEffect, useState } from 'react';
import { addComment, fetchComments } from '../api/client.js';

/**
 * =========================================================================
 * TASK 3: Comment on the image
 * =========================================================================
 */
export default function CommentSection({ imageId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  // ---------------------------------------------------------------
  // ===== PLACEHOLDER: FRONTEND TEAM =====
  // TODO (Task 3 - frontend):
  //   1. On mount, call fetchComments(imageId) and store in state.
  //   2. On form submit, call addComment(imageId, text), clear the
  //      input, and append/refetch so the new comment shows up.
  // ======================================
  useEffect(() => {
    // TODO: implement
  }, [imageId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: implement
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
