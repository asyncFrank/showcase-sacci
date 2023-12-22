import { MouseEventHandler } from "react";

export interface Contact {
  name: string;
  contact_type: string;
  image_url: string;
  city: string;
  state: string;
  intern_contact?: string;
  profession: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  whatsapp: string;
  site: string;
  specialties: string;
  email: string;
  phone: string;
  planting_culture: string;
  cultivations: string[];
  business_segment: string;
}

export interface SearchProfessionProps {
  profession: string;
  //setProfession é somente um setador de estado (profissao)
  setProfession: (profession: string) => void;
}

export interface SearchStateBrProps {
  stateBr: string;
  setStateBr: (stateBr: string) => void;
}
export interface FilterProps {
  searchStateBr?: string;
  search?: string;
  limit?: number;
  page?: number;
  sort: string;
  searchSpecialties?:string;
  cultivations?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
