import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/constants";
import Link from "next/link";

const Project = () => {
  return (
    <div id="projects" className="w-full flex flex-col justify-center align-middle lg:mt-36 mt-24 lg:px-36 md:px-24 px-8 my-6 py-6">
      <div>
        <h1 className="text-4xl lg:text-5xl font-extrabold border-b-4 border-code inline p-4">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-12">
        {projects.map((project) => {
          return (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.content}</p>
                  <br />
                  <p className="text-muted-foreground text-sm">
                    <span >Techonologies Used: </span>
                    {project.used}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={project.github} target="_blank" className="text-blue-500 hover:underline text-sm">
                    Project Link - GitHub/Google Colab
                  </Link>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
