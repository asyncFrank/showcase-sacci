"use client";
import Link from "next/link";
import { CustomButton } from ".";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex mb-6 justify-between items-center sm:px-16 px-6 py-4 border-y-2">
                <Link href="/" className="flex justify-center items-center">
          {/* <Image
            src="/logo.svg"
            alt="Sacci Agk Logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          <h1 className="text-2xl md:text-4xl md:font-extrabold">
            Contatos Agro AGK
          </h1>
        </Link>
        <ul className="flex justify-between items-center gap-4 m-auto">
          <li>
            <Link
              href={"/dashboard"}
              className="text-blue-700  hover:text-gray-400 hover:underline"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href={"/grid"}
              className="text-blue-700  hover:text-gray-400 hover:underline"
            >
              Exportar excel
            </Link>
          </li>
        </ul>
        
      </nav>
    </header>
  );
};

export default Navbar;
