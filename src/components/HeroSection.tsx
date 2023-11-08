"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const [totalRepository, setTotalRepository] = useState(0);
  const [EXPERIENCE, setEXPERIENCE] = useState(0);

  useEffect(() => {
    const getGithubInfo = async () => {
      const response = await fetch("https://api.github.com/users/yayanfr20", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await response.json();

      setTotalRepository(data.public_repos);
    };

    const getExperinece = async () => {
      const tglLahir = new Date("2019-05-20");

      // Dapatkan tanggal sekarang
      const sekarang = new Date();

      // Hitung umur
      let tahun = sekarang.getFullYear() - tglLahir.getFullYear();
      const bulan = sekarang.getMonth() - tglLahir.getMonth();
      const hari = sekarang.getDate() - tglLahir.getDate();

      if (bulan < 0 || (bulan === 0 && hari < 0)) {
        tahun--;
      }

      setEXPERIENCE(tahun);
    };

    getExperinece();
    getGithubInfo();
  }, []);
  return (
    <section className="w-full flex justify-between items-center flex-col-reverse sm:flex-row gap-3">
      <div className="flex-1 space-y-5">
        <h1 className="text-3xl sm:text-5xl">
          <span> Hi, nama saya</span> <br /> <strong>Yayan Faturrohman</strong>
        </h1>
        <p className="font-semibold text-sm">
          Saya seorang Full Stack Web Developer & mahasiswa teknik informatika.
        </p>
        <div>
          <Link
            href="/overview"
            className="text-sm font-bold flex gap-3 items-center"
          >
            <span className="hover:border-b-2 hover:border-white">
              Go To Overview
            </span>
            <span className="p-1 bg-gray-600 rounded-full">
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="w-full flex gap-5">
          <div className="space-y-2">
            <h3 className="text-sm sm:text-lg text-gray-500">REPOSITORY</h3>
            <span className="text-sm sm:text-xl">{totalRepository}</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm sm:text-lg text-gray-500">EXPERIENCE</h3>
            <span className="text-sm sm:text-xl">{EXPERIENCE} yrs</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm sm:text-lg text-gray-500">NATIONALITY</h3>
            <span className="text-sm sm:text-xl">IDN</span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/web-depeloper.jpg"
          width={300}
          height={300}
          className="rounded-full w-72  sm:w-full"
          alt="Yayan Faturrohman"
        />
      </div>
    </section>
  );
};

export default HeroSection;
