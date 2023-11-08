"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const links = [
  {
    name: "Overview",
    href: "/overview",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="w-full py-5">
      <nav className="w-full flex justify-between">
        <div className="flex gap-10 flex-1 items-center">
          <Link
            href="/"
            className="text-xl font-bold rounded bg-[#CDFFF3] py-1 px-2 sm:px-3 sm:py-2  text-black"
          >
            Y
          </Link>
          <div className="sm:flex hidden gap-10">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  item.href === pathname ? "text-white" : "text-gray-500"
                } hover:text-white`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-2 py-1 sm:px-3 sm:py-2 rounded bg-[#2BA386] text-white">
            Resume
          </button>
          <button onClick={() => setIsOpen(true)} className="sm:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <aside
        className={`w-full h-full absolute z-50 bg-[#1e1f2b] top-0 left-0 bottom-0 right-0 ${
          isOpen ? "block" : "hidden"
        } sm:hidden`}
      >
        <div className="w-full flex justify-center gap-10 items-center h-full flex-col">
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={
                item.href === pathname ? "text-white" : "text-gray-500"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </aside>
    </header>
  );
};

export default Header;
