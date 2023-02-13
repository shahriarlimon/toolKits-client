import { Route, Routes } from "react-router-dom";
import './App.css';
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
import MyPortfoliyo from "./Components/Pages/MyPortfoliyo/MyPortfoliyo";
import Blogs from "./Components/Pages/Blogs/Blogs";
import RequireAdmin from "./Components/Pages/Login/RequireAdmin/RequireAdmin";
import ToolDetailsPage from "./Components/Pages/Home/ToolDetailsPage";
import Cart from "./Components/Pages/Cart/Cart";
import Shipping from "./Components/Pages/Cart/Shipping";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ToolDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route path="my-order" element={<MyOrders />} />
            <Route path="payment/:id" element={<Payment />}></Route>
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="make-admin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
            <Route path="add-product" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
            <Route path="manage-all-order" element={<RequireAdmin><ManageAllOrder /></RequireAdmin>} />
            <Route path="manage-product" element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
          </Route>
          <Route path="/order/:id" element={<RequireAuth><Order /></RequireAuth>} />
          <Route path='/portfoliyo' element={<MyPortfoliyo />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/*  */}
        <ToastContainer />
      </Navbar>

    </div>
  );
}

export default App;
