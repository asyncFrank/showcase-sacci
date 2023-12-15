"use client";

import { Contact } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "./CustomButton";
import ContactDetail from "./ContactDetails";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const {
    city,
    name: nome,
    state,
    image_url,
    profession,
    facebook,
    instagram,
    linkedin,
    cultivations,
    contact_type,
    whatsapp,
  } = contact;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="flex items-center justify-between my-0 p-0 mx-auto">
        <h6 className="font-bold text-blue-500 opacity-[0.5]">
          {contact_type?.toLocaleUpperCase()}
        </h6>
        {/* <h2 className="car-card__content-title">{nome.toUpperCase()}</h2> */}
      </div>
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {nome?.length > 20 ? nome.slice(0, 20) + "..." : nome}
        </h2>
        {/* <h2 className="car-card__content-title">{nome.toUpperCase()}</h2> */}
      </div>

      <p className="flex mt-4 text-[18px] leading-[20px] break-all  font-extrabold">
        {profession?.length > 12 ? profession.slice(0, 12) + "..." : profession}
      </p>
      <p className="flex mt-2 text-[18px] leading-[20px] break-all  font-extrabold">
        {city} {state !== "--" ? "--" + state : ""}
      </p>
      <div className="relative flex items-center justify-center w-full h-24 my-1">
        <img
          src={image_url === "NA" ? "/na-contact-img.png" : image_url}
          alt={nome}
          width={80}
          // height={60}
          // className="rounded-sm object-contain"
          className="object-contain w-16 h-16 rounded-full"
        />
      </div>

      <div className="relative w-full flex mt-1">
        <div className="flex items-center justify-between text-grey gap-6">
          <div className="car-card__btn-container"></div>
          <div className="flex  justify-center items-center gap-2">
            {facebook !== null &&
            facebook !== "--" &&
            facebook !== "" &&
            facebook !== "null" ? (
              <Link href={facebook} target="_blank">
                {" "}
                <Image
                  src="/facebook.png"
                  width={32}
                  height={32}
                  alt="facebook"
                  className="contact-card__social-icon"
                />
              </Link>
            ) : (
              <Image
                src="/facebook-pb.png"
                width={32}
                height={32}
                alt="facebook logo inativo"
                className="contact-card__social-icon"
              />
            )}
          </div>
          <div className="car-card__icon">
            {instagram !== null &&
            instagram !== "--" &&
            instagram !== "" &&
            instagram !== "null" ? (
              <Link href={instagram} target="_blank">
                {" "}
                <Image
                  // src="/steering-wheel.svg"
                  src="/instagram.png"
                  width={32}
                  height={32}
                  alt="instagram"
                  className="contact-card__social-icon"
                />
              </Link>
            ) : (
              <Image
                src="/instagram-pb.png"
                width={32}
                height={32}
                alt="instagram logo inativo"
                className="contact-card__social-icon"
              />
            )}
          </div>

          <div className="car-card__icon">
            {linkedin !== null &&
            linkedin !== "--" &&
            linkedin !== "" &&
            linkedin !== "null" ? (
              <Link href={linkedin} target="_blank">
                {" "}
                <Image
                  src="/linkedin.png"
                  width={32}
                  height={32}
                  alt="linkedin"
                  className="contact-card__social-icon"
                />
              </Link>
            ) : (
              <Image
                src="/linkedin-pb.png"
                width={32}
                height={32}
                alt="linkedin logo inativo"
                className="contact-card__social-icon"
              />
            )}
          </div>

          {/* Planting Culture [alterado ->] Cultivations */}

          <div className="flex flex-col items-end ml-8">
            {cultivations?.map((cultivation) => (
              <h4 className="text-sm text-right" key={String(cultivation)}>
                {cultivation.toLocaleUpperCase()}
              </h4>
            ))}
          </div>
        </div>

        <div className="car-card__btn-container mt-8">
          <CustomButton
            title="Detalhes"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <ContactDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        contact={contact}
      />
    </div>
  );
};

export default ContactCard;
