import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
        </Navbar>
    </div>
  );
}

export default App;
