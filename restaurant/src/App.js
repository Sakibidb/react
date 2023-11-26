import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import TopBar from './pages/TopBar';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <>
      <BrowserRouter>
       <TopBar/>
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}>

         </Route>
       </Routes>
       <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
