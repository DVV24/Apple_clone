import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  return (
  <>
  <Navbar/>
  <Header/>
  <Hero/>
  <Main/>
  <Footer/>
  </>
  );
}

export default App
