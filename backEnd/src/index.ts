import http from "http";
import socket from "./app";

const server = http.createServer();
socket(server);

const PORT = process.env.PORT || 3010;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
