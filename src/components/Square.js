import React , { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

export default function Square() {
    const context = useContext(GameContext);
    console.log(context);
    return <button>0</button>;
}
