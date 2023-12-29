import React from "react";
import { io } from "socket.io-client";

let interval = 3000;
export default function App() {
  const onSocket = () => {
    const socket = io("http://192.168.1.21:3010");

    setInterval(() => {
      socket.emit("good", "클라이언트 -> 서버");
    }, interval);

    socket.on("hi", (data) => console.log(data)); // 서버 -> 클라이언트
  };

  return <button onClick={onSocket}>socket 통신 시작</button>;
}
