import Head from "next/head";
import React, { useState, useEffect, useRef, Component } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import TheBook from "../src/util/searchBook";
import InfiniteScroll from "react-infinite-scroll-component";

import SearchBar from "../src/components/searchBar";
import ResultList from "../src/components/resultList";
import SelectedItems from "../src/components/selectedItems";
import Book from "../src/components/book";
import SelectedBook from "../src/components/selectedBook";

export default function Home() {
  // api state(`https://gutendex.com/books?q=${searchTerm}&page=${page}`)for storing received book
  const [books, setBooks] = useState([]);
  // url state
  const [nextUrl, setNextUrl] = useState("");
  //selected books state
  const [selectBook, setSelectBook] = useState([]);


  const setBookSearch = (books) => {
    setBooks(books);
  };

  const fetchData = async (searchTerm, page) => {
    await fetch(nextUrl)
      .then((res) => {
        console.log("Response: ", res);
        return res.json();
      })
      .then((jsonResponse) => {
        console.log("Next fetch response:", jsonResponse);
        const newBooks = jsonResponse.results;

        // Add the new results to book state
        setBooks((prev) => [...prev, ...newBooks]);
        setNextUrl(jsonResponse.next);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Book</title>
        <meta name="description" content="The BookList App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="styles.main h-screen box-content pl-40">
        <div className="grid grid-cols-4 gap-4 p-5">
          
          <div className="col-span-3 ">
            <SearchBar setBookSearch={setBookSearch} setNextUrl={setNextUrl} />
          </div>
          <br />

          <div className=" col-span-2">
            {books && books.length ? (
              <ResultList
                books={books}
                fetchData={fetchData}
                setSelectBook={setSelectBook}
              />
            ) : (
              ""
            )}
          </div>

          <div className="overflow-x-visible overflow-scroll h-full col-span-1 row-span-1 w-[500px] ">
            {selectBook && selectBook.length ? (
              <SelectedItems
                selectBook={selectBook}
                setSelectBook={setSelectBook}
              />
            ) : (
              ""
            )}
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://ngonike.dev" target="_blank" rel="noopener noreferrer">
          By: Gabriel Onike{" "}
        </a>
      </footer>
    </div>
  );

}
