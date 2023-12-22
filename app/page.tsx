import { SearchBar } from "@/components";
import { fetchContacts } from "@/utils";
import ContactCard from "@components/ContactCard";
// import { cultivations } from "@constants";
import { Contact, HomeProps } from "@types";
import Link from "next/link";

type ContactProps = {
  contact: Contact;
  total: number;
  page: number;
  limit: number;
};

const generatePagination = (current: number, total: number) => {
  const sides = 2;
  let pages = [];
  let start = Math.max(current - sides, 1);
  let end = Math.min(current + sides, total);

  if (start > 1) pages.push({ key: "first", number: 1, label: "Primeira" });
  if (start > 3)
    pages.push({ key: "start-elipsis", number: "#", label: "..." });

  for (let i = start; i <= end; i++) {
    pages.push({ key: `page-${i}`, number: i, label: i });
  }
  // if (end < total - sides)
  //   pages.push({ key: "end-elipsis", number: "#", label: "..." });
  // if (end < total) pages.push({ key: "last", number: total , label: "Última" });
  return pages;
};

const LocalPagination = ({
  currentPage,
  lastPage,
  limit,
  searchStateBr = "",
  search = "",
  searchSpecialties = "",
  searchCultivations = "",
}: {
  currentPage: number;
  lastPage: number;
  limit: number;
  searchStateBr?: string;
  search?: string;
  searchSpecialties?: string;
  searchCultivations?: string;
}) => {
  const pages = generatePagination(currentPage, lastPage);
  return (
    <ul className="flex gap-1 ">
      {pages.map((page) => {
        return (
          <li key={page.key}>
            <Link
              href={`?page=${page.number}&limit=${limit}&searchStateBr=${searchStateBr}&search=${search}&searchSpecialties=${searchSpecialties}&cultivations=${searchCultivations}`}
              className={`${baseStyles} ${
                currentPage === page.number
                  ? "dark:text-white dark:boder-indigo-500 bg-blue-700 underline"
                  : "text-gray-900 border-gray-900"
              } ${page.number === "#" && "pointer-events-none"}`}
            >
              {page.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const baseStyles =
  "flex px-2 py-1 border border-slate-600 rounded-md hover:bg-slate-100 hover:font-semibold hover:text-gray-500";

export default async function Home({ searchParams }: HomeProps) {
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;
  const search = searchParams?.search;
  const searchStateBr = searchParams?.searchStateBr;
  const searchSpecialties = searchParams?.searchSpecialties;
  const cultivations = searchParams?.cultivations;

  const data = await fetchContacts({
    page: Number(searchParams?.page) || 1,
    limit: Number(searchParams?.limit) || 10,
    searchStateBr: searchParams?.searchStateBr || "",
    search: searchParams?.search || "",
    sort: searchParams?.sort || "",
    cultivations: searchParams?.cultivations || "",
    searchSpecialties: searchParams?.searchSpecialties || "",
  });

  // console.log(data.total);

  const totalPages = Number(Math.ceil(data.total / limit));
  const lastPage = totalPages;
  const currentPage = page;

  const isDataEmpty =
    !Array.isArray(data.contacts) || data.contacts.length < 1 || !data.contacts;

  return (
    <main className="overflow-hidden ">
      {/* <Hero /> */}

      <div className="mt-16 sm:mt-12 padding-x padding-y max-width">
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            {/* <CustomFilter title="cultivations" options={cultivations} /> */}
          </div>
        </div>

        {/* Contacts showcase start */}
        {!isDataEmpty ? (
          <section>
            <div className="home__contacts-wrapper">
              {data.contacts.map((contact: Contact) => (
                <ContactCard contact={contact} key={contact.name} />
              ))}
            </div>
            {/* Paginação */}
            <div className="p-2 my-2 flex gap-5 items-center justify-center">
              {" "}
              <LocalPagination
                lastPage={lastPage}
                currentPage={currentPage}
                limit={limit}
                search={search}
                searchStateBr={searchStateBr}
                searchSpecialties={searchSpecialties}
                searchCultivations={cultivations}
              />
              <p>{data?.length}</p>
            </div>
            {/* Show more */}
            {/* <ShowMore
              pageNumber={(searchParams.limit || 12) / 12}
              isNext={(searchParams.limit || 10) > data.total}
            /> */}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Nenhum resultado encontrado.
            </h2>
            <p>{data?.message}--</p>
          </div>
        )}
        {/* Contacts showcase end*/}
      </div>
    </main>
  );
}
