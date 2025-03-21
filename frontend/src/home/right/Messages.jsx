import React from "react";
import Message from "./message";

function Messages() {
  return (
    <div
      className="flex-1 overflow-y-auto flex-messages px-4 py-2 space-y-2"
      style={{ maxHeight: "76vh" }} // Adjust height as per layout
    >
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </div>
  );
}

export default Messages;
