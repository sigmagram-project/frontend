import LikeButton from './LikeButton.jsx';
import CommentSection from './CommentSection.jsx';

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
