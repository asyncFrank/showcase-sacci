"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SearchState } from ".";
import { useRouter } from "next/navigation";

//component SearchButton(lupa) que fará o submit do form
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

//Manufacturer -> State
const SearchBar = () => {
  const [searchStateBr, setSearchStateBr] = useState("");
  // profession
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (searchStateBr === "" && search === "") {
    //  return alert(
    //    "Preencha pelo menos 1 dos campos na Busca (Estado/Profissão)"
    //  );
    // }

    updateSearchParams(
      searchStateBr.toLocaleLowerCase(),
      search.toLocaleLowerCase()
    );
  };

  const updateSearchParams = (searchStateBr: string, search: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchStateBr) {
      // console.log('sim: ',)
      searchParams.set("searchStateBr", searchStateBr);
    } else {
      searchParams.delete("searchStateBr");
    }
    if (search) {
      searchParams.set("search", search);
    } else {
      searchParams.delete("search");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchState stateBr={searchStateBr} setStateBr={setSearchStateBr} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/profession-logo.svg"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 opacity-80"
          alt="ícone profissão"
        />
        <input
          type="text"
          name="profession"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite uma profissão. Ex.: Agrônomo"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
