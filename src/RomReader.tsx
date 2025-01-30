import React from "react";
import { Rom } from "./Rom";
import loadRom from "./Interpreter";
import {Chip8Type} from "./Rom";




const RomReader = () => {
    




    const handleRomUpload = (event: React.ChangeEvent<HTMLElement>) => {
        const romFile = (event.target as HTMLInputElement).files?.[0];
        if (!romFile)
            return;

        const romReader = new FileReader();
        romReader.onload = (event) => {
            if (event.target?.result) {
                const romContents = event.target.result as ArrayBuffer;
                const romContentsBytes = new Uint8Array(romContents);
                const rom: Rom = {
                    fileName: romFile.name,
                    rom: romContentsBytes,
                    type: Chip8Type.CHIP8, 
                };                
                console.log("ROM Loaded:", rom);
                loadRom({rom});  
            }
        }

        romReader.readAsArrayBuffer(romFile);
    }


    return (
    <>
      <input type="file" accept=".ch8" id="romReader" onChange={handleRomUpload} />

    </>
    )
}

export default RomReader;