import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Registerdoctor from './pages/Registerdoctor';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/allproducts' element={<AllProducts/>}></Route>
        <Route path='/registerdoc' element={<Registerdoctor/>}></Route>
        

      </Route>
    </Routes>
    </BrowserRouter>      
    </>
  );
}

export default App;
