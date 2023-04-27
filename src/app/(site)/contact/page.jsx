import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div
      className="mx-auto grid max-w-2xl grid-cols-1 items-center 
    gap-x-8 gap-y-6 px-4 py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8 border-t-2 border-gray-200"
      id="contact"
    >
      <form>
        <div className=" pb-3 mb-2 ">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                   focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <button>
            <Link
              href="mailto:preethi.lyn@gmail.com"
              className=" text-lg rounded-md px-4 py-4 bg-gradient-to-r
               to-amber-600 from-red-700 
          m-1 uppercase text-white font-bold scale-100 hover:scale-110 transition"
              style={{ letterSpacing: "0.2rem" }}
            >
              Send Mail
            </Link>
          </button>
        </div>
      </form>
      <div className=" bg-white  sm:border-0 md:border-l-4 lg:border-l-4 border-cyan-800 p-4">
        <h4 className="text-5xl font-extrabold text-center m-2 headingcursive ">
          <span
            className=" text-5xl bg-gradient-to-r from-orange-400 via-red-500
           to-cyan-700 bg-clip-text text-transparent"
          >
            Contact Me
          </span>
        </h4>
        <p
          className=" text-base text-cyan-950 font-bold 
        leading-relaxed mb-4 text-center"
        >
          Thank you for visiting My Portfolio! <br />
          If you have any questions, comments, or business inquiries, I am
          available to answer your questions and discuss any opportunities. Here
          is my contact information :
        </p>
        <p
          className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
        >
          <Link
            className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4 border-2 border-gray-300 p-2 rounded-md hover:bg-black hover:text-amber-600"
            id="sendemail"
            href="mailto:preethi.lyn@gmail.com"
          >
            Click Here to Send Email
          </Link>
        </p>
        <p
          className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
        >
          Email :
          <Link
            className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
            href="mailto:preethi.lyn@gmail.com"
          >
            {" "}
            preethi.lyn@gmail.com
          </Link>
        </p>

        <p
          className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
        >
          {" "}
          Follow Me :{" "}
          <span>
            <Link
              className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
              href="https://github.com/preethichals"
            >
              {" "}
              GitHub
            </Link>
          </span>{" "}
          <span>
            <Link
              className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
              href="https://www.linkedin.com/in/preethi-m-43289b6a/"
            >
              {" "}
              | LinkedIn{" "}
            </Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
