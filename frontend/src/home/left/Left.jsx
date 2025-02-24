import React from "react";
import Search from "./Search";
import Users from "./Users";

export default function left() {
  return (
    <div className="  w-[30%]  bg-black text-white">
      <h1 className="px-7 p-3 font-bold text-3xl">Chats</h1>
      <Search></Search>
      <hr className="m-4"></hr>
      <Users></Users>
    </div>
  );
}
