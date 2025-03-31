import axios from 'axios';

const scanResumeApi = async (resumeText, jobDescriptionText) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
        'http://localhost:5000/api/match',
        { 
            resume_text: resumeText,  
            job_description: jobDescriptionText  
        },
        {
            headers: { 
                'Content-Type': 'application/json', 
                Authorization: `Bearer ${token}` 
            },
        }
    );
    return response.data;
};

export default scanResumeApi;
