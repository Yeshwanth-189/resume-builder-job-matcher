import axios from 'axios';

const scanResumeApi = async (resumeText, jobDescriptionText) => {
    const response = await axios.post('http://localhost:5000/api/match', { resumeText, jobDescriptionText });
    return response.data;
};

export default scanResumeApi;