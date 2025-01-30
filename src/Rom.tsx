import React from "react"

enum Chip8Type {
    CHIP8,
    XOCHIP8,
    SCHIP8
}

type Rom = {
    fileName: string,
    rom: Uint8Array,
    type: Chip8Type
}

export { Chip8Type };
export type { Rom };
