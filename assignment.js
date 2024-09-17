"use strict";

// Define the books array with a sample book object
const books = [
    {
        title: "Sample Book",
        author: "Author Name",
        thirdParty: {
            goodreads: {
                rating: 4.5,
                ratingsCount: 1000,
                reviewsCount: 500,
                fiveStarRatingCount: 600,
                oneStarRatingCount: 50,
            },
        },
    },
];

//11.1
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
    entries.push([key]);
}

//11.2
for (const [index, value] of Object.values(
    books[0].thirdParty.goodreads
).entries()) {
    entries[index].push(value);
}

//11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);

//11.4
console.log(entries);
console.log(entries2);
