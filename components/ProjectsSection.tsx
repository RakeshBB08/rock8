import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Mutimodal Image Fsuion Using Deep Learning",
    description:
      "Image Fusion of IR Images and Depth images for enhancing image quality and extracting essential information.The fused images are used for anomaly detection of drivers and alerting them",
    image: "/img_fusion.png",
    github: "https://github.com/RakeshBB08/MachineLearning",
    link: "https://github.com/RakeshBB08/MachineLearning/blob/master/earlyFusion.ipynb",
  },
  {
    name: "Yet Another X.com",
    description:
      'A seamless and visually stunning social media platform built leveraging modern tech like NodeJS,MongoDB, and Socket.io.Inspired by the vision of an "everything app," the platform boasts comprehensive functionalities including registration, login, tweet-like posts, real-time messaging, and notifications.',
    image: "/twitterclone.png",
    github: "https://github.com/RakeshBB08/twitter-clone",
    link: "https://github.com/RakeshBB08/twitter-clone",
  },
  {
    name: "Forkify",
    description:
      "A robust recipe discovery and meal planning app called Forkify, utilizing the Model-View-Controller (MVC) architecture for clean and maintainable code. Leveraged HTML, CSS, and JavaScript to create a userfriendly interface with search, recipe adding, bookmarking, and pagination features. Integrated the Forkify API seamlessly via AJAX for asynchronous data fetching, resulting in a smooth and responsive user experience.",
    image: "/forkify.png",
    github: "https://github.com/RakeshBB08/forkify-recipeMaster",
    link: "https://forkify-rakeshbb.netlify.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="mt-10 rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
