import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import TypeIt from "typeit-react";
import { about } from "@/constants";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center align-middle lg:mt-36 mt-24 lg:px-36 md:px-24 px-8">
      <div className="grid max-lg:grid-cols-1 grid-cols-2 w-full">
        <div className="w-full">
          <h4 className="text-code text-xl font-bold font-mono animate-pulse">
            👋<TypeIt> Hi There! This is</TypeIt>
          </h4>
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-extrabold mt-2">
            Ankit Khurana
          </h1>
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-extrabold mt-2">
            I am a{" "}
            <span className="bg-accent px-2 m-1 rounded-lg">Developer.</span>
          </h1>
          <p className="text-muted-foreground mt-8 lg:mt-4">{about}</p>
          <Link href="#projects">
            <Button className=" mt-24 lg:block hidden rounded-full">
              Check Out My Projects
            </Button>
          </Link>
        </div>
        <div className="w-full flex justify-center mt-12 lg:mt-0">
          <Avatar className="w-52 h-52 lg:w-80 lg:h-80 md:w-64 md:h-64">
            <AvatarImage src="/avatar.png" alt="@shadcn" />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex justify-center mt-12 lg:mt-24 xl:mt-30">
        <Link href='#experience'>
        <svg
          className="animate-bounce max-lg:hidden block"
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          color="text-primary"
          >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
        </svg>
            </Link>
      </div>
    </div>
  );
};

export default Home;
