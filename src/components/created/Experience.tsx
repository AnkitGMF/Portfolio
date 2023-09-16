import { experience,skills } from "@/constants";
import { Button } from "../ui/button";

const Experience = () => {
  return (
    <div id="experience" className="w-full flex flex-col justify-center align-middle lg:mt-36 mt-24 lg:px-36 md:px-24 px-8 py-24">
      <div className="grid max-lg:grid-cols-1 grid-cols-2 w-full gap-16">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold lg:text-center">Experience</h1>
          {experience.map((exp) => {
            return (
              <>
                <p className="text-muted-foreground mt-6">
                  <span className="text-code">{exp.companyName} ({exp.companyPosition}) </span>
                  {exp.workDone}
                </p>
              </>
            );
          })}
        </div>
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold lg:text-center">Skills</h1>
          <div className="masonry sm:masonry-sm md:masonry-md mt-6 ">
            {skills.map((skill)=>{
                return(
                    <>
                        <Button disabled className='m-1 break-inside bg-accent text-primary'>{skill}</Button>
                    </>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
