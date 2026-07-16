import { useEffect, useState } from 'react';
import { addComment, fetchComments } from '../api/client.js';

export default function CommentSection({ imageId }) {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetchComments(imageId)
            .then(setComments)
            .catch((error) => {
                console.error('Failed to load comments', error);
            });
    }, [imageId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!text.trim()) {
            return;
        }

        try {
            const newComment = await addComment(imageId, text);

            setComments((currentComments) => [
                ...currentComments,
                newComment,
            ]);

            setText('');
        } catch (error) {
            console.error('Failed to add comment', error);
        }
    };

    return (
        <div className="comments">
            <div className="comment-list">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        {comment.text}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Add a comment"
                />

                <button type="submit">
                    Post
                </button>
            </form>
        </div>
    );
}