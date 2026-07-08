import LikeButton from './LikeButton.jsx';
import CommentSection from './CommentSection.jsx';

// Infra-only layout -- NOT a task placeholder. Combines the pieces built
// in Task 2 (LikeButton) and Task 3 (CommentSection) around a single image.
export default function ImageCard({ image, imageUrl }) {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={image.filename} />
      <div className="card-body">
        <LikeButton image={image} />
        <CommentSection imageId={image.id} />
      </div>
    </div>
  );
}
