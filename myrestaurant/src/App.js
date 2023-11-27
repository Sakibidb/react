
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import TopBar from './pages/TopBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
