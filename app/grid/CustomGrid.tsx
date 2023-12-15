"use client";
import { Contact } from "@types";
import { fetchContactsStatics } from "@utils";
import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import * as XLSX from "xlsx";

const CustomGrid = () => {
  const [contacts, setContacts] = useState([]);
  const [exportData, setExportData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContacts = async () => {
    const data = await fetchContactsStatics("professor");
    setContacts(data.contacts);
  };

  const exportChangeHandler = async (e: any) => {
    setLoading(true);
    const data = await fetchContactsStatics(e.target.value);
    setExportData(data);
    setLoading(false);
  };
  useEffect(() => {
    getContacts();
  }, []);
  const exportToExcel = (data: Contact[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, fileName + ".xlsx");
  };
  const handleExport = ()=>{
    console.log('clicou')
    exportToExcel(contacts,"teste")
  }
  return (
    <div>
      <button onClick={handleExport}>Exportar</button>
    </div>
  );
};

export default CustomGrid;
