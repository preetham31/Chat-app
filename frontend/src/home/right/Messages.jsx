import React from "react";
import Message from "./message";

function Messages() {
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(84vh-8vh)" }}
    >
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </div>
  );
}
export default Messages;
