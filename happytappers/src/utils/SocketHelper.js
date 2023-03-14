import React from "react";
import io from "socket.io-client";

export const socket = io.connect("http://localhost:8080"); //TODO: replace with link when deployed
export const SocketContext = React.createContext(socket);
