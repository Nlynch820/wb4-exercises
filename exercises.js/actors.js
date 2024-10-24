"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

for (const academyMember of academyMembers) {
  if (academyMember.memID == 187) console.log("Academy Member 187 is " + academyMember.name);
}

//    let experiencedMembers = [];
//    for (const member of academyMembers) {
//     if (member.films.length >= 3) {
//         experiencedMembers.push(member);

//     }
//    }
//         console.log("Experienced Academy Members: " + experiencedMembers);

// let bobs = []
// for (const member of academyMembers) {
//   if (member.name.includes("Bob")) {
//     bobs.push(member);
//   }
// }

// console.log("Bobs", bobs);

let matchedMembers = [];
for (const member of academyMembers) {
  for (const filmName of member.films) {
    if (filmName.startsWith("A")) {
      matchedMembers.push(member);
    }
  }
}

console.log("Academy members have been in a film that starts with the letter A");
console.log(matchedMembers);


