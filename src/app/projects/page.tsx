import ProjectList from "@/components/ProjectList";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full py-5 space-y-3">
      <h1 className="font-bold text-xl sm:text-3xl">Projects</h1>
      <div className="w-full flex flex-col sm:flex-row gap-3">
        <div className="flex-1 space-y-3">
          <p className="max-w-sm text-sm text-gray-500">
            Di halaman ini kamu akan menemukan proyek - proyek yang pernah saya
            buat
          </p>
          <ul className="list-disc text-sm text-gray-500">
            <li className="text-white">Semua Kategori</li>
            <li>UI Design</li>
            <li>Web Development</li>
            <li>Mobile Development</li>
          </ul>
        </div>
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
