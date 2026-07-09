import { useState } from 'react';
import { uploadImage } from '../api/client.js';

export default function ImageUpload({ onUploaded }) {
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;
        try {
            await uploadImage(file);
            setFile(null);
            e.target.reset();
            if (onUploaded) await onUploaded();
        } catch (err) {
            console.error('Upload failed', err);
        }
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