import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { blogServiceFactory } from "../services/blogService";


export const BlogContext = createContext()

export const BlogProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const blogService = blogServiceFactory();

    useEffect(() => {
        blogService.getAllBlogs()
            .then(result => {
                setBlogs(result)
            })
    }, [])


    const onCreateBlogSubmit = async (data) => {
        const newBlog = await blogService.createBlog(data);

        setBlogs(state => [...state, newBlog])

        navigate('/blogs')
    }

    const getBlog = (blogId) => {
        return blogs.find(blog => blog._id === blogId)
    }

    const deleteBlog = (blogId) => {
        return blogs.find(blog => blog._id === blogId)
    }

    const contextValues = {
        blogs,
        onCreateBlogSubmit,
        getBlog,
        deleteBlog
    }

    return (
        <BlogContext.Provider value={contextValues}>
            {children}
        </BlogContext.Provider>
    )

}

export const useBlogContext = () => {
    const context = useContext(BlogContext);

    return context;
}