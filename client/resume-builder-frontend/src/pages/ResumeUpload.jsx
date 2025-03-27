import React, { useState } from 'react';

const ResumeUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            // Handle file upload logic here
            console.log('File uploaded:', selectedFile.name);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div>
            <h1>Upload Your Resume</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
        </div>
    );
};

export default ResumeUpload;