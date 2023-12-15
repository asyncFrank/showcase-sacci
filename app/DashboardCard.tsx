"use client";

import { Contact } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
// import ContactDetail from "./ContactDetails";

interface ContactCardProps {
  contact: Contact;
}

const DashboardCard = () => {
  // const {
  //   city,
  //   name: nome,
  //   state,
  //   image_url,
  //   profession,
  //   facebook,
  //   instagram,
  //   linkedin,
  //   cultivations,
  //   contact_type,
  //   whatsapp,
  // } = contact;

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="flex items-center justify-between my-0 p-0 mx-auto">
        <h6 className="font-bold text-blue-500 opacity-[0.5]">
          nro contatos
        </h6>
        <h2 className="car-card__content-title">TOTAL CONTATOS POR CULTURA</h2>
        <h2 className="car-card__content-title">ARROZ </h2>
      </div>
      </div>
  );
};

export default DashboardCard;
