import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";
const request = requestFactory();

export const getAllComments = async (blogId) => {
  const searchQuery = encodeURIComponent(`blogId="${blogId}"`);
  const relationQuery = encodeURIComponent(`author=_ownerId:users`);

  const result = await request.get(
    `${baseUrl}?where=${searchQuery}&load=${relationQuery}`
  );
  const comments = Object.values(result);

  return comments;
};

export const getAllCommentsByUser = async () => {
  // const searchQuery = encodeURIComponent(`author=_ownerId:users`);

  const result = await request.get(`${baseUrl}`);
  const comments = Object.values(result);

  return comments;
};

export const createComment = async (blogId, blogTitle, comment) => {
  const result = await request.post(baseUrl, { blogId, blogTitle, comment });

  return result;
};

export const deleteComment = async (commentId) => {
  const result = await request.delete(`${baseUrl}/${commentId}`);
  return result;
};
