import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/recommendations';
const request = requestFactory();

export const getAllRecommendations = async (blogId) => {
    const searchQuery = encodeURIComponent(`blogId="${blogId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const recommendations = Object.values(result);

    return recommendations;
};

export const createRecommendation = async (blogId, recommendation) => {
    const result = await request.post(baseUrl, { blogId, recommendation });

    return result;
};


export const deleteRecommendation = async (recommendationId) => {
    console.log(`recId in recService: ${recommendationId}`)
    // const result = 
    await request.delete(`${baseUrl}/${recommendationId}`);


    // return result;
};

// export const deleteRecommendation = (recommendationId) => {
//     console.log(`recommendation id: ${recommendationId}`)
//     request.delete(`${baseUrl}/${recommendationId}`)
// }