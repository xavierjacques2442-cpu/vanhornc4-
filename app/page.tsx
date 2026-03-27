"use client";

import Image from "next/image";
import pokemonapilogo from "@/public/assets/pokemonapilogoremoved.png";
import randomicon from "@/public/assets/randomicon.png";
import searchicon from "@/public/assets/search icon.png";
import sparkleicon from "@/public/assets/sparkleicon.png";
import pokeballtransparent from "@/public/assets/pokeballtransparent.png";
import pokeballred from "@/public/assets/Pokeballred.png";
import { TextInput} from "flowbite-react";
import { useState } from "react";
import { fetchPokemon } from "@/dataservices/dataservices";

export default function Home() {
  const [pokemonName, setPokemonName] = useState<string>("");

  const handlePokemonFetch = async () => {
    const pokemonData = await fetchPokemon(pokemonName);
    console.log(pokemonData);
  };
  return (
    <div>
      <div className="!bg-[#3854A1]">
        <div className="grid grid-cols-2 grid-rows-1 mr-4">
          <Image
            loading="eager"
            alt="notesicon"
            src={pokemonapilogo}
            style={{ maxWidth: "30%", height: "auto%" }}
          />
          <div className="grid grid-cols items-center">
            <div className="flex flex-row justify-end">
              <TextInput
                className="rounded-xl p-3 bg-white text-black placeholder:text-black w-full h-fit focus:ring-transparent focus:outline-none"
                required
                placeholder="Search Pokemon..."
                id="pokemon"
                onKeyPress={(e) =>
                  e.key === "Enter" && fetchPokemon(pokemonName)
                }
                onChange={(e) => setPokemonName}
              />
              <Image
                onClick={handlePokemonFetch}
                className="bg-white rounded-2xl ml-3"
                loading="eager"
                alt="notesicon"
                src={searchicon}
                style={{ maxWidth: "5%", height: "auto" }}
              />
              <Image
                className="bg-white rounded-2xl ml-3"
                loading="eager"
                alt="notesicon"
                src={randomicon}
                style={{ maxWidth: "5%", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9]">
          <h1 className="text-black font-bold">Pokemon name</h1>
          <div>
            <Image
              className="max-w-sm text-black rounded-lg"
              loading="eager"
              alt="pokemon image"
              placeholder="blur"
              src={sparkleicon}
              style={{ maxWidth: "5%", height: "auto" }}
            />
            <Image
              className="rounded-2xl ml-3"
              loading="eager"
              alt="sparkle icon"
              src={sparkleicon}
              style={{ maxWidth: "2%", height: "auto" }}
            />
            <Image
              className="rounded-2xl ml-3"
              loading="eager"
              alt="pokeball transparent"
              src={pokeballtransparent}
              style={{ maxWidth: "2%", height: "auto" }}
            />
          </div>
        </div>
        <p>Element Type: </p>
        <p>Location: </p>
        <div className="bg-white text-black font-bold">
          <p>Abilities</p>
          <p>Moves</p>
          <p>Favorites
            <Image
              className="rounded-2xl ml-3"
              loading="eager"
              alt="favorites icon"
              src={pokeballred}
              style={{ maxWidth: "2%", height: "auto" }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
