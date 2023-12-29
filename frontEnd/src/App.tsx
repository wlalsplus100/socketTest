import React, { useEffect } from "react";
import { io } from "socket.io-client";

let interval = 3000;
const serverURL = process.env.REACT_APP_SERVER_URL;
export default function App() {
  useEffect(() => {
    const socket = io(`${serverURL}:3010`);

    setInterval(() => {
      socket.emit("good", "클라이언트 -> 서버");
    }, interval);

    socket.on("hi", (data) => console.log(data)); // 서버 -> 클라이언트

    return () => {
      socket.disconnect();
    };
  }, []);

  return <>소켓 통신을 시작합니다</>;
}
