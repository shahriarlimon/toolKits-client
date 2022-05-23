import React from "react";
import { useForm } from "react-hook-form";
import { Link,  useNavigate } from "react-router-dom";
import auth from "../../../Firebase/FirebaseConfig.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
    const [user] = useAuthState(auth)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  if (user) {
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({email:user.email}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.token){
          localStorage.setItem('access_token',data.token);
          navigate("/"); 
        }
      });
   
  }
  if (signInLoading || googleLoading) {
    <Loading />;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div class="min-h-screen bg-accent flex items-center justify-center relative z-0 mt-10">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} class="card-body">
          <h1 className="text-2xl text-center">Login</h1>
          <div class="form-control">
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
            <div className="flex justify-between">
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
              <label class="label">
                <button class="label-text-alt link link-hover text-blue-600">
                  Forgot password?
                </button>
              </label>
            </div>
          </div>
          <div class="form-control mt-6">
            {signInError && (
              <p className="text-xs text-center text-red-500 mb-2">
                {signInError.message}
              </p>
            )}
            <button type="submit" class="btn btn-primary">
              Login
            </button>
            <p className="text-xs mt-3 text-center font-poppins">
              New to ToolKits ? Please{" "}
              <Link to="/signup" className="text-green-700">
                Sign Up
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

export default Login;
