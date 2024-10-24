import './App.css';
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Stores from './pages/stores';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route index element={<Home/>}/>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/stores" element={<Stores/>}/>
  </Routes>
  <Footer />
  </BrowserRouter>
    </>
  );
}

export default App;
