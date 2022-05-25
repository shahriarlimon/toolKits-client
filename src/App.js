import { Route, Routes } from "react-router-dom";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin";
import ManageAllOrder from "./Components/Pages/Dashboard/ManageAllOrder";
import ManageProduct from "./Components/Pages/Dashboard/ManageProduct";
import MyOrders from "./Components/Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Components/Pages/Dashboard/MyOrders/Payment";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import Home from "./Components/Pages/Home/Home";
import Order from "./Components/Pages/Home/Order";
import Login from "./Components/Pages/Login/Login";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import Signup from "./Components/Pages/Login/Signup";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AddProduct from "./Components/Pages/Dashboard/AddProduct";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="my-order" element={<MyOrders />} />
            <Route path="payment/:id" element={<Payment/>}></Route>
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="make-admin" element={<MakeAdmin />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="manage-all-order" element={<ManageAllOrder />} />
            <Route path="manage-product" element={<ManageProduct />} />
          </Route>
          <Route path="/order/:id" element={<Order />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {/*  <Footer /> */}
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
