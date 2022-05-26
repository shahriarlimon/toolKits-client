import React from "react";

const Blogs = () => {
  return (
    <body class="bg-gray-100 text-gray-700  font-sans quicksand">
      <div class="p-16">
        <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
            <div class="m-2 text-justify text-sm">
            <p class="text-right text-xs">May 26, 2022</p>
              <h2 class="font-bold text-lg h-2 mb-8">
                How to improve react app performance{" "}
              </h2>
              <p class="text-xs">
              To optimize React rendering, one need to make sure that components receive only necessary props. It will let to control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.
              </p>
            </div> 
            <div class="w-full text-right mt-4">
              <a class="text-green-400 uppercase font-bold text-sm" href="#">
                Read More
              </a>
            </div>
          </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
            <div class="m-2 text-justify text-sm">
            <p class="text-right text-xs">May 26, 2022</p>
              <h2 class="font-bold text-lg  mb-8">
                {" "}
                Different ways to manage a state in a React application
              </h2>
              <p class="text-xs">
                1.Local state. <br/>2.Global state.<br/> 3.Server state.<br/>4.URL state.
              </p>
            </div>
            <div class="w-full text-right mt-4">
              <a class="text-green-400 uppercase font-bold text-sm" href="#">
                Read More
              </a>
            </div>
          </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
            <div class="m-2 text-justify text-sm">
            <p class="text-right text-xs">May 26, 2022</p>
              <h2 class="font-bold text-lg  mb-8">How does prototypical inheritance work? </h2>
              <p class="text-xs">
              Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
              </p>
            </div>
            <div class="w-full text-right mt-4">
              <a class="text-green-400 uppercase font-bold text-sm" href="#">
                Read More
              </a>
            </div>
          </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
            <div class="m-2 text-justify text-sm">
            <p class="text-right text-xs">May 26, 2022</p>
              <h2 class="font-bold text-lg h-6  mb-8"> What is a unit test? Why should write unit tests?</h2>
              <p class="text-xs">
              A unit test is a way to test a unit, the smallest code in a system that can logically be isolated. This is a function, a subroutine, a procedure, or a property in most programming languages.Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
              </p>
            </div>
            <div class="w-full text-right mt-4">
              <a class="text-green-400 uppercase font-bold text-sm" href="#">
                Read More
              </a>
            </div>
          </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
            <div class="m-2 text-justify text-sm">
              <p class="text-right text-xs">May 26, 2022</p>
              <h2 class="font-bold text-lg  mb-8">Finding the product by name</h2>
              <p class="text-xs">
               First of all I will take the input value of search text.Then I will Loop the array of products and I can get a product in every loop .Then I will put the name index onto the single product(product[0]).After that  I will put a if condition that will check wheater that search text was included .If the search text is included then I will return that particular product among all products array.
              </p>
            </div>
            <div class="w-full text-right mt-4">
              <a class="text-green-400 uppercase font-bold text-sm" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Blogs;
