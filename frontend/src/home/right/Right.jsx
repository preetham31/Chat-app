import React from "react";
import Type from "./Type";
import Messages from "./Messages";
import Topbar from "./Topbar";

export default function right() {
  return (
    <div className="  w-[70%]  bg-black bg-slate-800 ">
      <div>
        <Topbar></Topbar>
        <Messages></Messages>
        <Type></Type>
      </div>
    </div>
  );
}
