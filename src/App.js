import { Route, Routes } from "react-router-dom";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyOrders from "./Components/Pages/Dashboard/MyOrders";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import Home from "./Components/Pages/Home/Home";
import Order from "./Components/Pages/Home/Order";
import Login from "./Components/Pages/Login/Login";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import Signup from "./Components/Pages/Login/Signup";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MyOrders />} />
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
          <Route path="/order/:id" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
