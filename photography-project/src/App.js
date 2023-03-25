import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Header/Navigations';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
