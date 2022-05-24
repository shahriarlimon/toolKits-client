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
  const [user] = useAuthState(auth);
  const [token] = useToken(user);
  const location = useLocation();
 useEffect(()=>{
  if (token) {
    navigate("/");
  }
 },[navigate,token])
  if (loading || googleLoading || updating) {
    <Loading />;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div class="min-h-screen bg-accent flex items-center justify-center relative z-0 mt-10">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} class="card-body">
          <h1 className="text-2xl text-center">Sing Up</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
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
              class="input input-bordered"
            />
            <label class="label">
              {errors.name?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>

            <label class="label">
              <span class="label-text">Email</span>
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
              class="input input-bordered"
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
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
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
              class="input input-bordered"
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
          <div class="form-control mt-6">
            {error && (
              <p className="text-xs text-center text-red-500 mb-2">
                {error.message}
              </p>
            )}
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
            <p className="text-xs mt-3 text-center font-poppins">
              Already have an account ? Please{" "}
              <Link to="/login" className="text-green-700">
                Login
              </Link>
            </p>
          </div>
          <div class="divider">OR</div>
          {googleError && (
            <p className="text-xs text-center text-red-500">
              {googleError.message}
            </p>
          )}
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary btn-outline"
          >
            continue with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
