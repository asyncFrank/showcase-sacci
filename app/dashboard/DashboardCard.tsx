"use client";
import { CustomButton } from "@components";

import { fetchContactsStatics } from "@utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomGrid from "../grid/CustomGrid";


const DashboardCard = async () => {
  const router = useRouter();

  function formateDate(data: Date) {
    // Obtém o dia, mês e ano da data
    let dia = data.getDate();
    let mes = data.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
    let ano = data.getFullYear() % 100; // Obtém os dois últimos dígitos do ano

    // Adiciona um zero à esquerda se o dia ou mês for menor que 10
    dia = Number(dia < 10 ? "0" + dia : dia);
    mes = Number(mes < 10 ? "0" + mes : mes);

    // Retorna a data formatada como dd/mm/aa
    return dia + "/" + mes + "/" + ano;
  }
  // Exemplo de uso
  //   const dataAtual = new Date();
  //   const dataFormatada = formateDate(dataAtual);
  //   console.log(dataFormatada)

  const [cards] = useState([
    {
      title: "Total de Contatos",
      text: `Total de contatos até ${formateDate(new Date())}`,
      urlParam: ``,
      value: 9525,
    },
    // {
    //   title: "Total de Contatos",
    //   text: `Total de contatos até ${formateDate(new Date())}`,
    //   urlParam: ``,
    //   value: 9508,
    // },
    {
      title: "Total Pesquisadores",
      text: `Total de contatos até ${formateDate(new Date())}`,
      urlParam: `/?&search=PESQUISADOR`,
      value: 87,
    },
    {
      title: "Total Agrônomos",
      text: `Contatos com Profissão: 'Agrônomos/Eng. Agrõnomo' até ${formateDate(
        new Date()
      )}`,
      urlParam: `/?&search=AGRO`,
      value: 570,
    },
    {
      title: "Total Professores",
      text: `Contatos com Profissão: 'Professor/Docente' até ${formateDate(
        new Date()
      )}`,
      urlParam: `/?&search=PROFESSOR`,
      value: 93,
    },
    {
      title: "Estações Exp.",
      text: `Contatos categorizados como: 'Estações Experimentais Agro' até ${formateDate(
        new Date()
      )}`,
      urlParam: `/?&searchSpecialties=experimental`,
      value: 90,
    },
  ]);
  const contacts = await fetchContactsStatics("/?&search=AGRO");


  return (
    <div className="max-w-7xl w-full m-auto">
      <h1 className="text-3xl leading-10 text-center mb-5">Dashboard</h1>
      <div className="flex max-w-7xl items-center justify-center gap-2 w-full">
        {cards.map((card, i) => (
          <div
            className="rounded-2xl bg-light-white-100 transition-[.2s]  border-[2px]
           border-solid border-transparent hover:border-blue-700 cursor-pointer w-full p-4"
           key={i}
          >
            <h3 className="font-bold mb-4">{card.title}</h3>
            <p>{card.text}</p>
            <p>{card.value}</p>
            <CustomButton
              title="Acessar"
              containerStyles="w-full h-6 py-[12px] rounded-full bg-primary-blue"
              textStyles="text-white text-[12px] leading-[12px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => {
                router.push(`${card.urlParam}`);
              }}
             
            />
           
          
            
          </div>
        ))}
      </div>
      <div className="flex border-t w-full mt-3">
        <div>
          <h3>Culturas</h3>
          <p>hehejlfjasjdl a</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
