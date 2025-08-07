"use strict";

const users = [
  {
    name: "name1",
    age: 20,
    comment: "user1",
  },
  {
    name: "name2",
    age: 21,
    comment: "user2",
  },
];

for (const user of users) {
  const { name: userName, age: years, comment: test } = user;
  console.log(`Name: ${userName}, age: ${years}, Comment: ${test}`);
}
