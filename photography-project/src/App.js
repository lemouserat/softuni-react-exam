import './App.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Gallery } from './Components/Gallery/Gallery';
import { Home } from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { AddPhoto } from './Components/AddPhoto/AddPhoto';

function App() {
  return (
    <div className="App">

      <Header />

        <div class="page-content">
       <Routes> 
       
       <Route path='/' element={<Home />} /> 
         <Route path='/gallery' element={<Gallery/>} /> 
         <Route path='/login' element={<Login/>} /> 
         <Route path='/register' element={<Register/>} /> 
         <Route path='/add-photo' element={<AddPhoto/>} /> 
       </Routes> 
       <Footer />
        </div>

    </div>
  );
}

export default App;
