import React, { useState } from "react";
// import ReactDOM from "react-dom";
import axios from "axios";

let API_URL = `https://gutendex.com/books`;

const TheBook = {
  searchBook(searchTerm, page) {
    return fetch(`${API_URL}?q=${searchTerm}&page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log("JSON Response: ", jsonResponse);
        if (jsonResponse.results?.length) {
          return { books: jsonResponse.results, nextUrl: jsonResponse.next };
        } else {
          return [];
        }
      });
  },
};

export default TheBook;
