"use client";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Coffe Website",
    description: "Project 1 description",
    image: "/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Camp Website",
    description: "Project 2 description",
    image: "/projects/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Next Auth V5",
    description: "Project 3 description",
    image: "/projects/3.png",
    tag: ["All", "FullStack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "NextJS 14",
    description: "Project 4 description",
    image: "/projects/4.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Ecommerce NextJS",
    description: "Authentication amd CRUD operations",
    image: "/projects/5.png",
    tag: ["All", "FullStack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Twitch Clone",
    description: "Project 5.description",
    image: "/projects/8.png",
    tag: ["All", "FullStack"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };
  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-semibold mt-4 mb-8 lg:mt-8 lg:mb-12">
        My Projects
      </h2>
      <div
        className="text-white flex flex-row justify-center 
      items-center gap-5 py-6"
      >
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="FullStack"
          onClick={handleTagChange}
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          name="Frontend"
          onClick={handleTagChange}
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {filteredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              description={project.description}
              gitUrl={project.gitUrl}
              image={project.image}
              previewUrl={project.previewUrl}
              title={project.title}
              tag={project.tag}
              key={project.id}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
