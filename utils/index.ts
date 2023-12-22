import { FilterProps } from "@types";
import axios from "axios";

// const urlBase = "http://localhost:9002/api";
const urlBase = "https://sacci-agk.onrender.com/api/";
//Este atualmente
export const fetchContacts = async (filters: FilterProps) => {
  const {
    limit,
    page,
    sort,
    search,
    searchSpecialties,
    searchStateBr,
    searchCultivations,
  } = filters;
  const response = await axios.get(
    `${urlBase}/contacts?limit=${limit}&page=${page}&sort=${sort}
    &search=${search}&searchSpecialties=${searchSpecialties}&searchStateBr=${searchStateBr}&cultivations=${searchCultivations}`
  );

  console.log(`${urlBase}/contacts?limit=${limit}&page=${page}&sort=${sort}
  &search=${search}&searchSpecialties=${searchSpecialties}&searchStateBr=${searchStateBr}&cultivations=${searchCultivations}`);
  return response.data;
};

//STATIC FETCHS
export const fetchContactsStatics = async (
  search?: string,
  specialties?: string
) => {
  const response = await axios.get(
    `${urlBase}/contacts/exports?search=${search}&specialites=${specialties}`
  );

  return response.data;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
