import React from "react";
import Type from "./Type";
import Messages from "./Messages";
import Topbar from "./Topbar";

export default function right() {
  return (
    <div className="  w-full  bg-black bg-slate-800 ">
      <div>
        <Topbar></Topbar>
        <div
          className="py-2 flex-preetham overflow-y-auto "
          style={{ maxHeight: "calc(92vh-8vh)" }}
        >
          <Messages></Messages>
        </div>
        <Type></Type>
      </div>
    </div>
  );
}
