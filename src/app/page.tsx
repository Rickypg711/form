"use client";

import { useFormik } from "formik";
import Head from "next/head";
import Image from "next/image";
import { isConditionalExpression } from "typescript";
// import { useState } from "react";
import car from "../../public/marek-pospisil-oUBjd22gF6w-unsplash.jpg";
import * as Yup from 'yup';

export default function Home() {
  // formic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United States",
      terms:'',

  },
  validationSchema: Yup.object({
    name: Yup.string().max(20,'20 charachters or less')
  }),

    // sub form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [name, setName] = useState('');

  console.log(formik.values);
  return (
    <main className="h-screen flex items-center justify-center">
      <form 
      onSubmit={formik.handleSubmit}
      className="bg-white flex rounded-lg w-1/2" action="">
        <div className=" flex-1 p-20 dark:text-gray-700">
          <h1 className="text-3xl pb-2 ">Let's get started 😈</h1>
          <p className="text-lg text-gray-500">
            Join our e-learning platform today and unlock over 500+ courses and
            digital assets ready to download
          </p>
          <div className="mt-6">
            {/* name field */}
            <div className="pb-4">
              <label className=" block text-sm pb-2" htmlFor="name">
                Name
              </label>
              <input
                className=" bg-white border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            {/* end name */}
            {/* email field */}
            <div className="pb-4">
              <label className=" block text-sm pb-2" htmlFor="email">
                Email
              </label>
              <input
                className=" bg-white border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                type="email"
                name="email"
                placeholder="Enter Your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            {/* end email */}
            {/* Country  field */}
            <div className="pb-4">
              <label className=" block text-sm pb-2" htmlFor="country">
                Country
              </label>
              <select
                value={formik.values.country}
                onChange={formik.handleChange}
                className=" bg-white border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                name="country"
                placeholder="Enter Your Name"
              >
                <option value="mexico">Mexico</option>
                <option value="usa">United States</option>
                <option value="germany">Germany</option>
                <option value="spain">Spain</option>
                <option value="japan">Japan</option>
                <option value="argentina">Argentina</option>
              </select>
            </div>
            {/* end name */}
            {/* terms field */}
            <div className="pb-4">
              <label className=" block text-sm pb-2" htmlFor="terms">
                Terms of Service
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  className="h-5 w-5 text-teal-500 focus:ring-2 focus:ring-teal-500"
                />
                <p className="text-sm text-gray-500">
                  I agree to the Terms of Service that my data will be taken and
                  sold.
                </p>
              </div>
            </div>
            {/* end email */}
            <button
              type="submit"
              className="bg-teal-500 text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start Leatning Today{" "}
            </button>
          </div>
        </div>
        {/* image */}
        <div className="relative flex-1">
          <Image
            alt="form-learn"
            src={car}
            fill
            className=" object-cover rounded-lg"
          />
        </div>{" "}
      </form>
    </main>
  );
}
