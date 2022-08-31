import React, { useState} from "react";
import { useRouter } from "next/router";
import TheBook from "../util/searchBook";

export default function SearchBar({ setBookSearch, setNextUrl}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Submit handler
  const onSubmitHandler = async (e) => {
    TheBook.searchBook(searchTerm, page).then((data) => {
        console.log('Books fetched: ', data.books)
      setBookSearch(data.books, page);
      setNextUrl(data.nextUrl)
    });

    // Prevent browser refreshing after form submission
    e.preventDefault();
  };

  return (
    <>
      <div className="static">
        <div className="relative w-full p-10 items-center">
          <form onSubmit={onSubmitHandler} action="">
            <span className="">
              <input
                type="search"
                id="search"
                value={searchTerm}
                onChange={handleSearch}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for..."
                required
              />
            </span>
           
            <span className="">
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-11 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {" "}
                Search{" "}
              </button>
            </span>

          </form>
        </div>
      </div>
    </>
  );
}
