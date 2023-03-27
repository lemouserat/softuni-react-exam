import './App.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Gallery } from './Components/Gallery/Gallery';
import { Home } from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register/Register';

function App() {
  return (
    <div className="App">

      <Header />

        <div class="page-content">
       <Routes> 
       
       <Route path='/' element={<Home />} /> 
         <Route path='/gallery' element={<Gallery/>} /> 
         <Route path='/register' element={<Register/>} /> 
       </Routes> 
       <Footer />
        </div>

    </div>
  );
}

export default App;
