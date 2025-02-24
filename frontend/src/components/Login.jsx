import React from "react";
import { useForm } from "react-hook-form";
import { IoMdChatboxes } from "react-icons/io";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <div className="flex h-screen items-center justify-center bg-gray-200  ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="bg-white  px-6 py-4 rounded-md space-y-3 "
          >
            <div className="flex px-10">
              <h1 className="text-5xl text-blue-500 font-bold">Chat-App</h1>
              <div className="text-7xl px-2">
                <IoMdChatboxes />
              </div>
            </div>

            <h1 className="  text-center text-2xl text-gray-500 font-bold ">
              Login with your{" "}
              <span className="text-blue-500 font-semibold">Account</span>
            </h1>
            <h2 className="px-20 text-gray-600">
              Enter your credentials below
            </h2>

            {/* email */}
            <label className="input input-bordered flex items-center gap-2 bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                {...register("Email", { required: true })}
              />
            </label>
            {errors.Email && (
              <span className="text-red-600 text-sm font-semibold">
                This field is required
              </span>
            )}

            <label className="input input-bordered flex items-center gap-2 bg-gray-200 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                {...register("Password", { required: true })}
              />
            </label>
            {errors.Password && (
              <span className="text-red-600 text-sm font-semibold">
                This field is required
              </span>
            )}

            {/* text and button */}
            <input
              type="submit"
              value="Login"
              className=" text-white bg-blue-600 w-full rounded-lg py-2 cursor-pointer"
            ></input>
            <div className="text-gray-600">
              Don't have any Account?{" "}
              <span className="text-blue-500 cursor-pointer underline m-1">
                Signup
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
