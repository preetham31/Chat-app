import React from "react";
import { IoSendSharp } from "react-icons/io5";

function Type() {
  return (
    <>
      <div className=" flex space-x-1 h-[8vh] xt-center bg-gray-800 ">
        <div className=" mx-4 w-[70%]">
          <input
            type="text"
            placeholder="Type here"
            className="border-[1px] border-gray-700  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1"
          />
        </div>
        <button className="text-3xl">
          {" "}
          <IoSendSharp />
        </button>
      </div>
    </>
  );
}

export default Type;
