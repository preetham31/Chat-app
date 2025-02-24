import React from "react";
import { IoMdChatboxes } from "react-icons/io";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validatePasswordMatch = (value) => {
    const password = watch("password");
    return value === password || "Passwords don't match";
  };

  const onSubmit = (data) => {
    console.log(data);

    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };

    axios
      .post("http://localhost:5001/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response?.data || "An error occurred");
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white px-6 py-4 rounded-md space-y-3"
      >
        {/* Header */}
        <div className="flex px-10">
          <h1 className="text-5xl text-blue-500 font-bold">Chat-App</h1>
          <div className="text-7xl px-2">
            <IoMdChatboxes />
          </div>
        </div>
        <h1 className="text-center text-2xl text-gray-500 font-bold">
          Registration in your{" "}
          <span className="text-blue-500 font-semibold">Account</span>
        </h1>
        <h2 className="px-20 text-gray-600">Enter your credentials below</h2>

        {/* Username */}
        <label className="input flex items-center gap-2 bg-gray-100">
          <input
            type="text"
            className="grow"
            placeholder="Username "
            {...register("name", { required: "Username is required" })}
          />
        </label>
        {errors.name && (
          <span className="text-red-600 text-sm">{errors.name.message}</span>
        )}

        {/* Email */}
        <label className="input flex items-center gap-2 bg-gray-100">
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
        </label>
        {errors.email && (
          <span className="text-red-600 text-sm">{errors.email.message}</span>
        )}

        {/* Password */}
        <label className="input flex items-center gap-2 bg-gray-100">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
        </label>
        {errors.password && (
          <span className="text-red-600 text-sm">
            {errors.password.message}
          </span>
        )}

        {/* Confirm Password */}
        <label className="input flex items-center gap-2 bg-gray-100">
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            {...register("confirmpassword", {
              required: "Confirm Password is required",
              validate: validatePasswordMatch,
            })}
          />
        </label>
        {errors.confirmpassword && (
          <span className="text-red-600 text-sm">
            {errors.confirmpassword.message}
          </span>
        )}

        {/* Submit Button */}
        <input
          type="submit"
          value="Signup"
          className="text-white bg-blue-600 w-full rounded-lg py-2 cursor-pointer"
        />
        <div className="text-gray-600">
          Have any account?{" "}
          <span className="text-blue-500 cursor-pointer ">Login</span>
        </div>
      </form>
    </div>
  );
}
