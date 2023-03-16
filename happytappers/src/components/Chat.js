import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Form } from "react-bootstrap";
import "./css/Chat.css";
import { SocketContext } from "../utils/SocketHelper";

export default function Chat() {
    const socket = useContext(SocketContext);
    const [messagesReceived, setMessagesReceived] = useState([]);
    const messagesColumnRef = useRef(null);
    useEffect(() => {
        socket.on("receive-message", (data) => {
            console.log(data);
            setMessagesReceived((messages) => [
                ...messages,
                {
                    message: data.message,
                    username: data.username,
                },
            ]);
        });

        return () => socket.off("receive-message");
    }, [messagesReceived, socket]);
    useEffect(() => {
        messagesColumnRef.current.scrollTop = messagesColumnRef.current.scrollHeight;
    }, [messagesReceived]);
    return (
        <ListGroup className="messagesColumn " ref={messagesColumnRef}>
            {messagesReceived.map((msg, index) => (
                <ListGroupItem key={index}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span className="username">{msg.username}</span>
                    </div>
                    <p className="msg">{msg.message}</p>
                    <br />
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}
