import React from "react";

const BussinessSummary = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-8">
          <div class="w-full mb-6 lg:mb-0">
            <h1 class="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">Statistic</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 sm:w-1/4 w-1/2">
            <div class="bg-indigo-500 rounded-lg p-2 xl:p-6">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">2.7K</h2>
                <p class="leading-relaxed text-gray-100 font-bold">Users</p>
            </div>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <div class="bg-indigo-500 rounded-lg p-2 xl:p-6">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
                <p class="leading-relaxed text-gray-100 font-bold">Reviews</p>
            </div>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <div class="bg-indigo-500 rounded-lg p-2 xl:p-6">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">10M+</h2>
                <p class="leading-relaxed text-gray-100 font-bold">Revenue</p>
            </div>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <div class="bg-indigo-500 rounded-lg p-2 xl:p-6">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">20+</h2>
                <p class="leading-relaxed text-gray-100 font-bold">Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BussinessSummary;
