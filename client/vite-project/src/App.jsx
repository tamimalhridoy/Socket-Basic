import React, { useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

const App = () => {
  useEffect(() => {
    socket.emit("client-sms", {
      message: "hello server",
    });
    socket.on("server-Message", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>User connected Done</h1>
    </div>
  );
};

export default App;
