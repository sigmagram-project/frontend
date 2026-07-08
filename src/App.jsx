import Logo from './components/Logo.jsx';
import ImageUpload from './components/ImageUpload.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import FeedbackModal from './components/FeedbackModal.jsx';

// Infra-only layout -- NOT a task placeholder. Wires the pieces together;
// the actual behavior lives in the components below.
export default function App() {
  return (
    <div>
      <header className="app-header">
        <Logo />
        <h1 style={{ fontSize: '1.1rem', margin: 0 }}>Image Board</h1>
      </header>

      <main>
        <ImageUpload />
        <ImageGallery />
      </main>

      {/* Handles the "close page -> ask for feedback" flow (Task 4). */}
      <FeedbackModal />
    </div>
  );
}
