import { useState } from "react";
import { projects } from "@cv";
import Card from "./Card.jsx";

const ProjectGrid = () => {
  const [category, setCategory] = useState("all");

  // Filter projects based on category
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === category
        );

  return (
    <section className="border-b border-white/20 mb-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {/* Category Filter Buttons */}
        <div className="col-span-full flex justify-center border-l border-r border-white/20">
          <button
            className={`px-4 py-2 uppercase font-semibold border-l border-white/20 ${category === "all" ? "bg-white text-black" : "text-white"} hover:bg-white/20 hover:text-white transition`}
            onClick={() => setCategory("all")}>
            All
          </button>
          <button
            className={`px-4 py-2 uppercase font-semibold border-l border-r border-white/20 ${category === "frontend" ? "bg-white text-black" : "text-white"} hover:bg-white/20 hover:text-white transition`}
            onClick={() => setCategory("frontend")}>
            Frontend
          </button>
          <button
            className={`px-4 py-2 uppercase font-semibold border-r border-white/20 ${category === "portfolio" ? "bg-white text-black" : "text-white"} hover:bg-white/20 hover:text-white transition`}
            onClick={() => setCategory("portfolio")}>
            Portfolio
          </button>
        </div>

        {/* Project Cards */}
        {filteredProjects.reverse().map((project, index) => (
          <Card
            key={index}
            project={index + 1}
            year={project.year}
            demo={project.demo}
            code={project.code}
            icons={project.technology}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
