import React from "react";
import io from "socket.io-client";

export const socket = io.connect("https://happytapperssockets.herokuapp.com");
export const SocketContext = React.createContext(socket);
