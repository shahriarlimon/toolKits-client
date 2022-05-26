import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
    error,
  } = useQuery("orders", () =>
    fetch(` https://enigmatic-bastion-29863.herokuapp.com/get-reviews`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div class="w-full max-w-6xl mx-auto">
          <div class="text-center max-w-xl mx-auto">
            <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              What people <br />
              are saying.
            </h1>
            <h3 class="text-xl mb-5 font-light">
              Explore our products and see if they fit for you
            </h3>
            <div class="text-center mb-10">
              <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews?.map((review) => (
              <div class="px-3">
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="avatar online placeholder">
                      <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                        <span class="text-xl capitalize">{review?.name?.slice(0,1)}</span>
                      </div>
                    </div>

                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        {review?.name}
                      </h6>
                      <p>
                        Given Rating:{" "}
                        <span className="text-green-600 font-bold">
                          {review?.rating}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="lg:text-3xl text-2xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {review?.description?.slice(0, 200)}
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
