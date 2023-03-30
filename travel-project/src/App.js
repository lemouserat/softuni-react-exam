import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Gallery } from './Components/Gallery/Gallery';
import { Home } from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { AddPhoto } from './Components/AddPhoto/AddPhoto';
import { PhotoDetails } from './Components/PhotoDetails/PhotoDetails';
import { Blog } from './Components/Blog/Blog';
import { AddBlog } from './Components/AddBlog/AddBlog';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';

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
                <Route path='/add-photo' element={<AddPhoto/>} /> 
                <Route path='/photo-details' element={<PhotoDetails/>} /> 
                <Route path='/blogs' element={<Blog/>} /> 
                <Route path='/add-blog' element={<AddBlog/>} /> 
                </Routes> 
            </BlogProvider>
          <Footer />
          </div>
      </AuthProvider>
    </div>
  );
}

export default App;
