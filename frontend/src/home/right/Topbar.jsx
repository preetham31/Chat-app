import React from "react";

export default function Topbar() {
  return (
    <div className="pl-5 pt-5  h-[12vh]  flex space-x-4 bg-gray-700  hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl"> Preetham Nayini</h1>
        <span className="text-sm">Online</span>
      </div>
    </div>
  );
}
