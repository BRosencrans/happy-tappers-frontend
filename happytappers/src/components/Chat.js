import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Form } from "react-bootstrap";
import { SocketContext } from "../utils/SocketHelper";

export default function Chat() {
   
    const socket = useContext(SocketContext);
    const [messagesReceived, setMessagesReceived] = useState([]);

    useEffect(() => {
       
        socket.on('receive-message', (data) => {
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

    return (
        
        <ListGroup>
            {messagesReceived.map((msg, index) => (
                <ListGroupItem key={index}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{msg.username}</span>
                    </div>
                    <p>{msg.message}</p>
                    <br />
                </ListGroupItem>
            ))}
        </ListGroup>
        
    );
}
