import { Pokemon } from "@/interfaces/interfaces"

export const fetchPokemon = async (pokemon: string) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data: Pokemon[] = await response.json();

    return data[0];
}