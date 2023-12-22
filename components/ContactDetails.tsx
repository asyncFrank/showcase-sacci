"use client";
import { Fragment } from "react";
import Image from "next/image";

import { Transition, Dialog } from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

import { Contact } from "@/types";

interface ContactDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  contact: Contact;
}

const ContactDetail = ({
  isOpen,
  closeModal,
  contact,
}: ContactDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* será o backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-x-lg max-h-[90vh] 
                overflow-y-auto transform rounded-2xl
                 bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-6"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-20 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain z-99"
                    />
                  </button>

                  <div className="flex flex-1 flex-col gap-3 mb-6 ">
                    <div className="relative w-full max-h-28 h-40 bg-pattern bg-cover bg-center rounded-lg p-1">
                      <div className="flex items-center">
                        <img
                          src={
                            contact.image_url === "NA"
                              ? "/na-contact-img.png"
                              : contact.image_url
                          }
                          alt={contact.name}
                          width="100px"
                          className="object-contain rounded-2xl mr-3"
                        />
                        <h1 className="text-white font-extrabold sm:text-2xl text-sm">
                          {contact.name}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {contact?.contact_type === "PJ"
                        ? "Contato Interno: " + contact.intern_contact
                        : "Profissão: " + contact.profession}
                      {/* {contact.profession } {contact.intern_contact} */}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {/* {Object.entries(contact).map(([key, value]) => ( */}

                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"Nome:"}</h4>
                        <p className="text-black-100 font-extrabold">
                          {contact.name}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"Município:"}</h4>
                        <p className="text-black-100 font-semibold">
                          {contact.city}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"UF:"}</h4>
                        <p className="text-black-100 font-semibold text-right">
                          {contact.state}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"Profissão:"}</h4>
                        <p className="text-black-100 font-semibold">
                          {contact.profession}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"Atividade:"}</h4>
                        <p className="text-black-100 font-semibold text-justify">
                          {contact.business_segment === "undefined"
                            ? "---"
                            : contact.business_segment}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">
                          {"Especialidades:"}
                        </h4>
                        <p className="text-black-100 font-semibold text-justify">
                          {contact.specialties === "undefined"
                            ? "---"
                            : contact.specialties}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"Email:"}</h4>
                        <p className="text-black-100 font-semibold">
                          {contact.email}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"Site:"}</h4>
                        <p className="text-black-100 font-semibold">
                          {contact.site}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"cultura:"}</h4>
                        <p className="text-black-100 font-semibold">
                          {contact.planting_culture}
                        </p>
                      </div>
                      <div className="flex justify-items-end gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{"Tel:"}</h4>
                        <p className="text-black-100 font-semibold">
                          {contact.phone}
                        </p>
                      </div>
                      <div className="flex items-center justify-items-end gap-1 w-full text-right">
                        <FaWhatsapp />
                        <h4 className="text-gray capitalize ">Whatsapp:</h4>
                        <p className="text-black-100 font-semibold">
                          {contact.whatsapp}
                        </p>
                      </div>
                      <div className="flex items-center justify-items-end gap-1 w-full text-right">
                        <CiFacebook />
                        <h4 className="text-gray capitalize ">Facebook:</h4>
                        <p className="text-black-100 font-semibold">
                          {contact.facebook}
                        </p>
                      </div>

                      {/* ))} */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ContactDetail;
