"use strict";

// Define the openingHours object
const openingHours = {
    monday: { open: 9, close: 17 },
    tuesday: { open: 10, close: 18 },
    wednesday: { open: 11, close: 19 },
    thursday: { open: 12, close: 20 },
    friday: { open: 13, close: 21 },
    saturday: { open: 14, close: 22 },
    sunday: { open: 15, close: 23 },
};

// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}
