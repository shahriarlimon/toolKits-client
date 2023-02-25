/* import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/FirebaseConfig.init";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
      console.log(data,user?.displayName);
    const url = " https://enigmatic-bastion-29863.herokuapp.com/create-review";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ ...data, name: user?.displayName }),
      headers: {
        authorization: `${user.email} ${localStorage.getItem("access_token")}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        toast(result.message);
        reset();
      });
  };

  return (
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} class="card-body">
        <h1 className="text-2xl text-center">Add Review</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Rating</span>
          </label>
          <input
            required
            {...register("rating", {
              required: {
                value: true,
                message: "Rating is required",
              },
            })}
            type="number"
            placeholder="Rating"
            class="input input-bordered"
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            required
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
            type="text"
            placeholder="Description"
            class="input input-bordered"
          />
          <label class="label">
            {errors.description?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">
            submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
 */