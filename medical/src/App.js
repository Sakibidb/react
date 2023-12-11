import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./component/Topbar";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import About from "./page/About";
import Service from "./page/Service";
import Department from "./page/Department";
import Doctors from "./page/Doctors";
import Contact from "./page/Contact";
import Appointment from "./page/Appointment"


function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar></Topbar>
        <Header></Header>
        <Routes>
          <Route index element={<Hero></Hero>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/department" element={<Department></Department>}></Route>
          <Route path="/doctors" element={<Doctors></Doctors>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
