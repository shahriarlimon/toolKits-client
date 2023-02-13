import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../../Firebase/FirebaseConfig.init';
import Loading from '../Loading/Loading';
import { GiDrill } from "react-icons/gi"

const Navbar = ({ children }) => {
  const [user, userLoading] = useAuthState(auth);
  const { pathname } = useLocation();
  const handleSignOut = () => {
    signOut(auth);
  }
  if (userLoading) {
    return <Loading />;
  }
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/*  <!-- Navbar --> */}
        <div class="w-full navbar text-white bg-[#A52A2A] shadow-gray-300 ">
          {pathname.includes("dashboard") && (
            <label
              tabindex='0'
              for='dashboard-sidebar'
              class='btn btn-ghost lg:hidden '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
          )}
          <div class="flex-1 px-2 mx-2 text-2xl font-serif"><GiDrill className='mr-1' />TOOLKITS</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal space-x-3">
              {/* <!-- Navbar menu content here --> */}
              <li><NavLink className={"bg-transparent"} to="/">Home</NavLink></li>
              <li><NavLink className={"bg-transparent"} to="/cart">Cart</NavLink></li>

              {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
              <li><NavLink className="bg-transparent" to="/blogs">Blogs</NavLink></li>
              <li><NavLink className={"bg-transparent"} to="/portfoliyo">My Portfoliyo</NavLink></li>
              {user && <button className='btn btn-ghost'>{user.displayName}</button>}
              {user ? <button onClick={() => handleSignOut()} className='btn btn-ghost'>Logout</button> : <li><NavLink className={"bg-transparent"} to="/login">Login</NavLink></li>}


            </ul>
          </div>
        </div>
        {/*  <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 space-y-3">
          {/*  <!-- Sidebar content here --> */}
          <li><NavLink className="bg-[#A52A2A] text-white" to="/">Home</NavLink></li>
          <li><NavLink className="bg-[#A52A2A] text-white" to="/cart">Cart</NavLink></li>
          {user && <li><NavLink className="bg-[#A52A2A] text-white" to="/dashboard">Dashboard</NavLink></li>}
          <li><NavLink className="bg-[#A52A2A] text-white" to="/blogs">Blogs</NavLink></li>
          <li><NavLink className="bg-[#A52A2A] text-white" to="/portfoliyo">My Portfoliyo</NavLink></li>
          {user && <button className='btn btn-ghost'>{user.displayName}</button>}
          {user ? <button onClick={() => handleSignOut()} className='btn btn-ghost'>Logout</button> : <li><NavLink className="bg-[#FFA500] text-white" to="/login">Login</NavLink></li>}
        </ul>

      </div>
    </div>
  );
};

export default Navbar;