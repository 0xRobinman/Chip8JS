import React from "react";
import RomReader from "./RomReader";
import { Rom } from "./Rom";



const interpreter = document.getElementById("interpreter");








interface loadRomProps {
    rom: Rom
}
function loadRom({ rom }: loadRomProps) {
    console.log("test");
    
}

const Interpreter = () => {







    return (
        <canvas id="interpreter"></canvas>
    )
}


export default Interpreter;
export { Interpreter, loadRom };