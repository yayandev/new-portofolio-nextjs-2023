"use client";
import { fetcher } from "@/utils/swr";
import Image from "next/image";
import useSWR from "swr";

const projects = [
  {
    id: 1,
    name: "Login Page Ui Design",
    category: "UI Design",
    image: "/project.png",
  },
  {
    id: 2,
    name: "Login Page Ui Design",
    category: "UI Design",
    image: "/project.png",
  },
  {
    id: 3,
    name: "Login Page Ui Design",
    category: "UI Design",
    image: "/project.png",
  },
  {
    id: 4,
    name: "Login Page Ui Design",
    category: "UI Design",
    image: "/project.png",
  },
];

const ProjectList = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.API_URL}/projects`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="justify-around animate-pulse sm:justify-end flex-[2] flex flex-wrap gap-3">
        <div className="w-72 h-52 text-center space-y-3 p-3 rounded bg-slate-800"></div>
        <div className="w-72 h-52 text-center space-y-3 p-3 rounded bg-slate-800"></div>
        <div className="w-72 h-52 text-center space-y-3 p-3 rounded bg-slate-800"></div>
        <div className="w-72 h-52 text-center space-y-3 p-3 rounded bg-slate-800"></div>
      </div>
    );
  }

  if (error) {
    return <div>failed to load</div>;
  }

  return (
    <div className="justify-around sm:justify-end flex-[2] flex flex-wrap gap-3">
      {data?.data.map((item: any) => (
        <div
          key={item.id}
          className="w-72 text-center space-y-3 p-3 rounded bg-slate-800"
        >
          <Image
            src={item.image}
            width={200}
            height={200}
            alt="Project"
            className="w-full"
          />
          <h3>{item.title}</h3>
          {/* <p className="text-sm text-black">{item.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
