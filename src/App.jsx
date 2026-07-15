import { useState } from 'react';
import Logo from './components/Logo.jsx';
import ImageUpload from './components/ImageUpload.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import FeedbackModal from './components/FeedbackModal.jsx';

export default function App() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleUploaded = () => {
        setRefreshKey((current) => current + 1);
    };

    return (
        <div>
            <header className="app-header">
                <Logo />
            </header>

            <main>
                <ImageUpload onUploaded={handleUploaded} />
                <ImageGallery refreshKey={refreshKey} />
            </main>

            <FeedbackModal />
        </div>
    );
}