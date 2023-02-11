import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/FirebaseConfig.init";
import useToken from "../../Hooks/useToken";
import Loading from "../../Shared/Loading/Loading";

const Signup = () => {
  const [createUserWithEmailAndPassword, createEmailPassUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating, upadatingError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [user, userLoading] = useAuthState(auth);
  const [token] = useToken(user);
  const location = useLocation();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user])
  if (loading || googleLoading || updating || userLoading) {
    <Loading />;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div class="flex h-screen items-center justify-center my-10 py-10">
      <div class="w-full md:w-64 p-6 bg-white rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} class="">
          <h1 className="text-2xl text-center font-medium mb-4 border-b-2 py-1">Sign Up</h1>
          <div class="form-control mb-4">
            <label class="label block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              required
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              placeholder="Name"
              class="w-full border border-gray-400 p-2 rounded-lg focus:outline-none"
            />
            <label class="label">
              {errors.name?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control mb-4">
            <label class="label block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              required
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Provide a valid email",
                },
              })}
              type="email"
              placeholder="email"
              class="w-full border border-gray-400 p-2 rounded-lg focus:outline-none"
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control mb-4">
            <label class="label block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              required
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer!",
                },
              })}
              type="password"
              placeholder="password"
              class="w-full border border-gray-400 p-2 rounded-lg focus:outline-none"
            />
            <label class="label">
              {errors.password?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            {error && (
              <p className="text-xs text-center text-red-500 mb-2">
                {error.message}
              </p>
            )}
            <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition ease-in-out duration-300">
              Sign Up
            </button>
            <p className="text-xs mt-3 text-center font-poppins">
              Already have an account ? Please{" "}
              <Link to="/login" className="text-green-500">
                Login
              </Link>
            </p>
          </div>
          <div class="divider">OR</div>
          {googleError && (
            <p className="text-xs text-center text-red-500 mb-1">
              {googleError.message}
            </p>
          )}
          <button
            onClick={() => signInWithGoogle()}
            className="bg-transparent w-full hover:bg-blue-500 hover:text-white text-blue-500 font-medium py-2 px-4 border border-blue-500 rounded-lg transition ease-in-out duration-300 text-center"
          >
            continue with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
