import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Gallery } from './Components/Gallery/Gallery';
import { Home } from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { AddPhoto } from './Components/AddPhoto/AddPhoto';
import { Blogs } from './Components/Blogs/Blogs';
import { AddBlog } from './Components/AddBlog/AddBlog';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';
import { BlogPostDetails } from './Components/BlogPostDetails.js/BlogPostDetails';
import { EditBlog } from './Components/EditBlog/EditBlog';
import { Logout } from './Components/Logout/Logout';
import { RouteGuard } from './Components/common/RouteGuard';
import { BlogOwner } from './Components/common/BlogOwner';
import { MyProfile } from './Components/MyProfile/MyProfile';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Header />
          <div className="page-content">
            <BlogProvider>
            <Routes> 
                <Route path='/' element={<Home />} /> 
                <Route path='/gallery' element={<Gallery/>} /> 
                <Route path='/login' element={<Login/>} /> 
                <Route path='/register' element={<Register/>} /> 
                <Route path='/blogs' element={<Blogs/>} /> 
                <Route path='/blogs/:blogId' element={<BlogPostDetails />} />

                <Route element={<RouteGuard/>}>
                    <Route path='/add-photo' element={<AddPhoto/>} /> 
                    <Route path='/add-blog' element={<AddBlog/>} /> 
                    <Route path='/blogs/:blogId/edit' element={
                   <BlogOwner>
                      <EditBlog />
                   </BlogOwner> 
                    } />
                    <Route path='/logout' element={<Logout/>} />
                    <Route path='/my-profile' element={<MyProfile/>} /> 
                </Route>
                </Routes> 
            </BlogProvider>

          {/* <Footer /> */}
          </div>
      </AuthProvider>
    </div>
  );
}

export default App;
