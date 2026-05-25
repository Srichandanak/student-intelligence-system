import React from 'react';

const CardComponent = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-200 p-6">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case Study
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Building with Tailwind CSS
          </h1>
          <p className="mt-2 text-slate-500">
            Learn how to use utility classes to build modern, responsive interfaces directly in your JSX.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
