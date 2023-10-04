import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages-components/home/Home";
import Navbar from "./components/navbar-components/navbar/Navbar";
import Footer from "./components/footer-components/footer/Footer";
import Login from "./components/pages-components/login/Login";
import PageSearch from "./components/pages-components/pageSearch/PageSearch";

function App() {
  return (
    <>
    <BrowserRouter>
      <div style={{display: "flex"}}>
        <div style={{padding: "5px"}}>
        <Navbar />
        </div>
        <div style={{flexGrow: 1}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="search" element={<PageSearch/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
