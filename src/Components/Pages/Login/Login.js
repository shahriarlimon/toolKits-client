import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/FirebaseConfig.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/actions/userActions";

const Login = () => {
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user, userLoading] = useAuthState(auth)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  if (signInLoading || googleLoading || userLoading) {
    <Loading />;
  }
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(data.email, data.password);
      if (auth.currentUser) {
        dispatch(loginUser({ email: auth.currentUser.email }))
      }
    } catch (error) {
      console.log(error)
    }

  };
  const googleSubmit = async () => {
    try {
      await signInWithGoogle()
      if (auth.currentUser) {
        dispatch(register({ email: auth.currentUser.email }))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div class="flex h-screen items-center justify-center my-10 py-10">
      <div class="w-full md:w-64 p-6 bg-white rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl text-center font-medium mb-4 border-b-2 py-1">Login</h1>
          <div class="mb-4 form-control">
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
            <label className="block text-gray-700 font-medium mb-2">
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
            <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition ease-in-out duration-300">
              Login
            </button>
            <p className="text-xs mt-3 text-center font-poppins">
              New to ToolKits ? Please{" "}
              <Link to="/signup" className="text-green-500">
                Sign Up
              </Link>
            </p>
          </div>
          <div class="divider">OR</div>
          {googleError && (
            <p className="text-xs text-center text-red-500 mb-2">
              {googleError.message}
            </p>
          )}
          <button
            onClick={() => googleSubmit()}
            className="bg-transparent w-full hover:bg-blue-500 hover:text-white text-blue-500 font-medium py-2 px-4 border border-blue-500 rounded-lg transition ease-in-out duration-300 text-center"
          >
            continue with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
