import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { blogServiceFactory } from "../services/blogService";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [blogsOfUser, setBlogsOfUser] = useState([]);
  const blogService = blogServiceFactory();

  useEffect(() => {
    blogService.getAllBlogs().then((result) => {
      setBlogs(result);
    });
  }, []);

  const onCreateBlogSubmit = async (data) => {
    const newBlog = await blogService.createBlog(data);

    setBlogs((state) => [...state, newBlog]);

    navigate("/blogs");
  };

  const getBlog = (blogId) => {
    return blogs.find((blog) => blog._id === blogId);
  };

  const getBlogsOfUser = (userId) => {
    setBlogsOfUser((blogs) => blogs.filter((blog) => blog._ownerId == userId));
  };

  const onBlogEditSubmit = async (values) => {
    const result = await blogService.editBlog(values._id, values);

    setBlogs((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/blogs/${values._id}`);
  };

  const deleteBlog = (blogId) => {
    setBlogs((state) => state.filter((blog) => blog._id !== blogId));
  };

  const deleteComment = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  const contextValues = {
    blogs,
    blogsOfUser,
    onCreateBlogSubmit,
    getBlog,
    onBlogEditSubmit,
    deleteBlog,
    deleteComment,
    getBlogsOfUser,
  };

  return (
    <BlogContext.Provider value={contextValues}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  return context;
};
