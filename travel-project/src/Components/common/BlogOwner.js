import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useBlogContext } from '../../contexts/BlogContext';


export const BlogOwner = ({
    children,
}) => {
    const { blogId } = useParams();
    const { getBlog } = useBlogContext();
    const { userId } = useAuthContext();

    const currentGame = getBlog(blogId);

    if (currentGame && currentGame._ownerId !== userId) {
        return <Navigate to={`/blogs/${blogId}`} replace />
    }

    return children ? children : <Outlet />
};