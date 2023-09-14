import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center align-middle lg:mt-36 mt-24 lg:px-36 md:px-24 px-8">
      <div className="grid max-lg:grid-cols-1 grid-cols-2 w-full">
        <div className="w-full text-center lg:text-left">
          <h4 className="text-code text-xl font-bold font-mono animate-pulse">
            👋<TypeIt> Hi There! This is</TypeIt>
          </h4>
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-extrabold mt-2">Ankit Khurana</h1>
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-extrabold mt-2">
            I am a{" "}
            <span className="bg-accent px-2 m-1 rounded-lg">Developer.</span>
          </h1>
          <p className="text-muted-foreground text-left mt-8 lg:mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the lea
          </p>
          <Button className=" mt-24 lg:block hidden rounded-full">
            Check Out My Projects
          </Button>
        </div>
        <div className="w-full flex justify-center mt-12 lg:mt-0">
          <Avatar className="lg:w-86 lg:h-86 w-72 h-72">
            <AvatarImage src="/avatar.png" alt="@shadcn" />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex justify-center mt-12 lg:mt-24 xl:mt-36">
        {/* <Image src="/down.svg" alt="Scroll Down" width='50' height='50' className="animate-bounce"/> */}
        <svg className='animate-bounce'width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="text-primary"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </div>
  );
};

export default Home;
