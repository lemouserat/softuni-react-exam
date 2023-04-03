import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAllComments = async (blogId) => {
    const searchQuery = encodeURIComponent(`blogId="${blogId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const createComment = async (blogId, comment) => {
    const result = await request.post(baseUrl, { blogId, comment });

    return result;
};

export const deleteComment = async (commentId) => {
    console.log(`comment id from commentService: ${commentId}`)
    const result = await request.delete(`${baseUrl}/${commentId}`)
    console.log(`result from commentService: ${Object.toString(result)}`)
    return result
    
}    