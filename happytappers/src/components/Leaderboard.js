import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

export default function Leaderboard() {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        fetch("https://happytappersbackend.herokuapp.com/api/scores", {
       // fetch("http://localhost:3001/api/scores", {
            method: "GET",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "https://happytappersbackend.herokuapp.com",
                //"Access-Control-Allow-Origin": "http://localhost:3001/api/scores",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setScores(data);
            });
    }, []);

    return (
        <Card className="p-4" id="highscore">
            <h3 className="text-center">Leaderboard</h3>
            <Table hover responsive>
                <thead>
                    <th>User</th>
                    <th>Score</th>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.user}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}
