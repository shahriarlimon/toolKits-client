import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import ManageProduct from "./Components/Pages/Dashboard/ManageProduct";
import Payment from "./Components/Pages/Dashboard/MyOrders/Payment";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import Home from "./Components/Pages/Home/Home";
import Order from "./Components/Pages/Home/Order";
import Login from "./Components/Pages/Login/Login";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import Signup from "./Components/Pages/Login/Signup";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./Components/NotFound/NotFound";
import MyPortfoliyo from "./Components/Pages/MyPortfoliyo/MyPortfoliyo";
import Blogs from "./Components/Pages/Blogs/Blogs";
import RequireAdmin from "./Components/Pages/Login/RequireAdmin/RequireAdmin";
import ToolDetailsPage from "./Components/Pages/Home/ToolDetailsPage";
import Cart from "./Components/Pages/Cart/Cart";
import Shipping from "./Components/Pages/Cart/Shipping";
import ShippingDetailsPreview from "./Components/Pages/Cart/ShippingDetailsPreview";
import CheckoutForm from "./Components/Pages/Cart/CheckoutForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./Components/Pages/Cart/OrderSuccess";
import ConfirmOrder from "./Components/Pages/Cart/ConfirmOrder";
import { loadUser } from "./redux/actions/userActions";
import store from "./redux/store";
import Success from "./Components/Pages/Cart/Success";
import { useSelector } from "react-redux";
import ProtectedRoute from "./Components/Route/ProtectedRoute";
import UserDashboard from "./Components/Pages/User/UserDashboard";
import MyOrders from "./Components/Pages/User/MyOrders";
import UserProfile from "./Components/Pages/User/UserProfile";
import AddReview from "./Components/Pages/User/AddReview";
import AdminDashboard from "./Components/Pages/Admin/AdminDashboard";
import ManageAllOrders from "./Components/Pages/Admin/ManageAllOrders";
import MakeAdmin from "./Components/Pages/Admin/MakeAdmin";
import ManageProducts from "./Components/Pages/Admin/ManageProducts";
import AddProduct from "./Components/Pages/Admin/AddProduct";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user)
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get('http://localhost:5000/api/v1/payment/stripeapikey', {
      withCredentials: true
    })
    setStripeApiKey(data.stripeApiKey)
  }
  useEffect(() => {
    store.dispatch(loadUser())
    getStripeApiKey()
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ToolDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          {
            user?.role === "user" && <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/order/confirm" element={<ConfirmOrder />} />
              <Route path="/shippingPreview" element={<ShippingDetailsPreview />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              {stripeApiKey && (<Route path="/process/payment" element={<Elements stripe={loadStripe(stripeApiKey)}>
                <CheckoutForm />
              </Elements>} >
              </Route>)}
              <Route path="/order/success" element={<Success />} />
              <Route path="/dashboard" element={<UserDashboard />}>
                <Route path="myOrder" element={<MyOrders />} />
                <Route path="my-profile" element={<UserProfile />} />
                <Route path="add-review" element={<AddReview />} />
              </Route>
            </Route>
          }
          <Route element={<ProtectedRoute />} isAdmin={user?.role === "admin" ? true : false} adminRoute={true} isAuthenticated={isAuthenticated}>
            <Route path="/admin/dashboard" element={<AdminDashboard />}>
              <Route path="my-profile" element={< UserProfile />} />
              <Route path="manage-all-orders" element={<ManageAllOrders />} />
              <Route path="make-admin" element={<MakeAdmin />} />
              <Route path="manage-product" element={<ManageProducts />} />
              <Route path="add-product" element={<AddProduct />} />
            </Route>

          </Route>
          {/* <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route path="my-order" element={<MyOrders />} />
            <Route path="payment/:id" element={<Payment />}></Route>
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="make-admin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
            <Route path="add-product" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
            <Route path="manage-all-order" element={<RequireAdmin><ManageAllOrder /></RequireAdmin>} />
            <Route path="manage-product" element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
          </Route> */}
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
