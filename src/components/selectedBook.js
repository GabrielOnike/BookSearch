import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SelectedBook({ book, setSelectBook }) {
  
    const removeBook = () => {
    setSelectBook((prev) => {
      return prev.filter((oldBook) => book.id !== oldBook.id);
    });
  };

  return (
    <>
      <div
        href="#"
        className="item_direction box-content flex flex-col lg:h-48 w-[420px] items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >

        <Image
          className="object-cover w-full h-full md:h-auto md:w-48 md:rounded-none "
          src={book.formats["image/jpeg"]}
          width="100px"
          height="100px"
          alt={book.title}
        />

        <div className="grid grid-cols-3 flex justify-between p-4 leading-normal">
          
          <span className="col-span-2">
            <h5 className="flexbox truncate overflow-hidden mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
            <br />
          </span>

          <span className="col-span-1 p-6">
            <button
              onClick={removeBook}
              className="  py-2 px-4 text-base font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Remove
            </button>
          </span>

        </div>

      </div>
    </>
  );
}
