import React from 'react';
import auth from '../../../Firebase/FirebaseConfig.init';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    const profile ={
      name:user?.displayName,
      email:user?.email,
      education:data.education,
      location:data.location,
      phone:data.phone,
      linkedin:data.linkedin
    };
    fetch(`http://localhost:5000/create-profile`, {
  method: 'POST',
  body: JSON.stringify(profile),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'authorization':`Bearer ${localStorage.getItem('access_token')}`
  },
})
  .then((response) => response.json())
  .then((data) => {
    if(data.status){
      toast(data.message);
      reset();
    }
  });
  };
 
    return (
      
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
   <div className='flex justify-between items-center mb-3'>
   <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update your profile</h2>
    <div>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
    </div>
   </div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700 dark:text-gray-200" for="education">Education</label>
                <input name='education' id="education" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("education")}
                />
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="location">Your Location</label>
                <input id="location" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("location")}
                />
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="phone">Phone</label>
                <input id="phone" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("phone")}/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="linkedin">Your Linkedin Url</label>
                <input id="linkedin" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("linkedin")}/>
            </div>
        </div>

        <div class="flex items-center justify-center mt-6">
           
            <button type='submit'  class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Profile</button>
        </div>
    </form>
</section>
        
    );
};

export default MyProfile;