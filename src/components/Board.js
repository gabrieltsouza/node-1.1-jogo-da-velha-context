import React , { useContext } from "react";

import { GameContext } from "../contexts/GameContext";
import Square from "./Square";

export default function Board() {
    const { Squares } = useContext(GameContext);
    console.log(Squares);
    return (
        <div className="board-container">
            <div className="board">
                {Squares.map((value, index) => (
                    <Square></Square>
                ))}
            </div>
        </div>
    );
}
