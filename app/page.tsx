import Image from "next/image";
import pokemonapilogo from "@/public/assets/pokemonapilogoremoved.png";
import { Navbar, TextInput } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <Navbar className="bg-[#3854A1]">
        <Image
          loading="eager"
          alt="notesicon"
          src={pokemonapilogo}
          style={{ maxWidth: "20%", height: "auto%" }}
        />
        <div>
          <TextInput
            className="rounded-lg bg-white text-black p-3"
            placeholder="Search Pokemon..."
          />
        </div>
      </Navbar>
    </div>
  );
}
