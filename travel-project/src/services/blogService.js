import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/blogs'

export const blogServiceFactory = (token) => {
    const request = requestFactory(token)

    const getAllBlogs = async () => {
        const result = await request.get(baseUrl);
        const blogs = Object.values(result);

        return blogs
    }

    const getOneBlog = async (blogId) => {
        const result = await request.get(`${baseUrl}/${blogId}`)

        return result;
    }

    const createBlog = async (blogData) => {
        const result = await request.post(baseUrl, blogData);
    
        console.log(result);
        return result;
    };

    const editBlog = (blogId, data) => request.put(`${baseUrl}/${blogId}`, data)

     const deleteBlog = (blogId) => request.delete(`${baseUrl}/${blogId}`)


    return {
        getAllBlogs,
        getOneBlog,
        createBlog,
        editBlog,
        delete: deleteBlog,
    }
}