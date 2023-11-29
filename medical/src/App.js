import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./component/Topbar";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import About from "./page/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar></Topbar>
        <Header></Header>
        <Routes>
          <Route>
          <Route path="/" element={<Hero></Hero>}>
            <Route path="/about" element={<About></About>}></Route>
          </Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
