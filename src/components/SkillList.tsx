"use client";
import { fetcher } from "@/utils/swr";
import React from "react";
import useSWR from "swr";

const SkillList = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.API_URL}/skills`,
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return (
      <div className="w-full flex flex-wrap justify-start gap-3 animate-pulse max-w-2xl">
        <div className="w-36 px-2 py-6 rounded bg-slate-700"></div>
        <div className="w-36 px-2 py-6 rounded bg-slate-700"></div>
        <div className="w-36 px-2 py-6 rounded bg-slate-700"></div>
        <div className="w-36 px-2 py-6 rounded bg-slate-700"></div>
        <div className="w-36 px-2 py-6 rounded bg-slate-700"></div>
        <div className="w-36 px-2 py-6 rounded bg-slate-700"></div>
        <div className="w-36 px-2 py-6 rounded bg-slate-700"></div>
        <div className="w-36 px-2 py-6 rounded bg-slate-700"></div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-wrap justify-start gap-3 max-w-3xl">
      {data?.data.map((item: any, index: number) => (
        <div className="w-40 p-2 rounded bg-slate-700" key={index}>
          <h1 className="font-bold text-xl text-center">{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
