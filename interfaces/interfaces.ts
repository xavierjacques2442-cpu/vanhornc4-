import { useState } from "react";

export interface Pokemon{
    name: string;
    img: string;
    level: string; 
}


export interface PokemonContextType {
    pokemon: Pokemon | null;
    setPokemon: (pokemon: Pokemon | null) => void
}