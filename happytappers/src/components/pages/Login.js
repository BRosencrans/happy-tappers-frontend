import React from "react";
import { NavLink } from "react-router-dom";

export default function Login(){
    return(
        <div>
            <header>
                <h1>Happy Tappers</h1>
                <NavLink to="/">
                    <button>Home </button>
                </NavLink>
            </header>
            <form>
                <label>
                    Username:
                    <input type="text" placeholder="username"></input>
                </label>
                <label>
                    Password:
                    <input type="text" placeholder="password"></input>
                </label>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}
