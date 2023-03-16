import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

export default function HighScore() {
    const [yourScores, setYourScores] = useState([]);
    const userId = localStorage.getItem("id");
    const username = localStorage.getItem("username");
    console.log(userId);
    useEffect(() => {
        fetch(`https://happytappersbackend.herokuapp.com/api/users/${userId}`, {
      //  fetch(`http://localhost:3001/api/users/${userId}`, {
            method: "GET",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "https://happytappersbackend.herokuapp.com",
               // "Access-Control-Allow-Origin": "http://localhost:3001/",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setYourScores(data.scores);
            });
    }, []);

    return (
        <Card className="p-4" id="highscore">
            <h3 className="text-center">{username}'s Scores</h3>
            <Table>
                <thead>
                    <th>Date</th>
                    <th>Score</th>
                </thead>
                <tbody>
                    {yourScores &&
                        yourScores.map((score, index) => (
                            <tr key={index}>
                                <td>{score.date}</td>
                                <td>{score.score}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Card>
    );
}
