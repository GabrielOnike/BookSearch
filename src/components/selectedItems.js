import React, { useState } from "react";
import { useRouter } from "next/router";
import SelectedBook from "./selectedBook";

export default function SelectedItems({ selectBook, setSelectBook }) {

  return (
    <>
      <section className="container h-[400px] p-10">
        {selectBook &&
          selectBook.map((book, index) => {
            return (
              <SelectedBook
                key={index}
                book={book}
                setSelectBook={setSelectBook}
              />
            );
          })}
      </section>
    </>
  );
}
