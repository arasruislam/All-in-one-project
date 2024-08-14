import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   const error = useRouteError();

   const statusCode = error?.status || 500;
   const defaultMessages = {
      404: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      500: "Something went wrong on our end. Please try again later.",
      403: "You do not have permission to access this page.",
      401: "You are not authorized to view this page.",
   };

   const errorMessage =
      error?.message ||
      defaultMessages[statusCode] ||
      "An unexpected error occurred.";

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
         <h1 className="text-6xl font-bold text-gray-800">
            {statusCode} - {statusCode === 404 ? "Page Not Found" : "Error"}
         </h1>
         <p className="text-xl text-gray-600 my-4">{errorMessage}</p>
         <Link
            to="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
         >
            Go to Homepage
         </Link>
      </div>
   );
};

export default ErrorPage;