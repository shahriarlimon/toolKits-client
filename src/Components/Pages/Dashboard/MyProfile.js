import React from 'react';
import auth from '../../../Firebase/FirebaseConfig.init';
import { useAuthState } from "react-firebase-hooks/auth";

const MyProfile = () => {
  const [user] = useAuthState(auth)
    return (
<div class="hero min-h-screen bg-blue-100">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">This is <span className='text-purple-500'>{user?.displayName}</span></h1>
      <p class="py-6">Email:{user?.email}</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <h1 className='text-xl font-bold text-center'>Update Your Profile</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Education</span>
          </label>
          <input type="text" placeholder="Your latest degree" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Location</span>
          </label>
          <input type="text" placeholder="City/District" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">phone</span>
          </label>
          <input type="text" placeholder="phone number" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Linkedin</span>
          </label>
          <input type="text" placeholder="Your linkedin url" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        
    );
};

export default MyProfile;