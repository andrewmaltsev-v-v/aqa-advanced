"use strict";

const book = {
  title: "book1",
  author: "cool_name",
  year: 2014,
};

const { title: bookName, author: authorName } = book;

console.log(bookName, authorName);
