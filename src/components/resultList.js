import React, { useState } from "react";
import Book from "./book";
import Home from "../../pages";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ResultList({ books, fetchData, setSelectBook }) {

  return (
    <>
    <div id="scrollableDiv" style={{ direction: "rtl" }} >
      <InfiniteScroll
        dataLength={books.length}
        next={() => {
          fetchData();
        }}
        hasMore={true}
        loader={<h3> Loading...</h3>}
        height={600}
        endMessage={<h4>Nothing more to show</h4>}
        scrollableTarget="scrollableDiv"
      >

        <div style={{ direction: "ltr" }} className="p-10">
          {books &&
            books.map((book) => {
              return <Book key={book.id} book={book} setSelectBook={setSelectBook} />;
            })}
        </div>

      </InfiniteScroll>
      </div>
    </>
  );
}
