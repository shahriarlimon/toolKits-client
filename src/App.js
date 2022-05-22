import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Navbar>
    </div>
  );
}

export default App;
