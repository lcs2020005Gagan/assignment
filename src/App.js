import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import History from './components/History';
import Climb from './components/Climb';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomePage/>
    <History/>  
    <Climb/>    
    <Footer/>
    </div>
  );
}

export default App;
