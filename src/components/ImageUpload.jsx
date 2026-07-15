import { useState } from 'react';
import { uploadImage } from '../api/client.js';

export default function ImageUpload({ onUploaded }) {
    const [file, setFile] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            return;
        }

        try {
            await uploadImage(file);

            setFile(null);
            event.target.reset();

            if (onUploaded) {
                onUploaded();
            }
        } catch (error) {
            console.error('Upload failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: 24 }}>
            <input
                type="file"
                accept="image/*"
                onChange={(event) =>
                    setFile(event.target.files?.[0] ?? null)
                }
            />

            <button type="submit" disabled={!file}>
                Upload
            </button>
        </form>
    );
}