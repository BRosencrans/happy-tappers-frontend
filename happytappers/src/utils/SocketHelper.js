import React from "react";
import io from "socket.io-client";

export const socket = io.connect("https://happytapperssockets.herokuapp.com");
//export const socket = io.connect("http://localhost:8080");
export const SocketContext = React.createContext(socket);
