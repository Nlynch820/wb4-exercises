"use strict";

let myInfo = {
  name: "Nick Lynch",
  address: "123 paint street",
  city: "Bronx",
  state: "New York",
  zip: "10003",
};

function printContact(myInfo) {
  console.log(myInfo.name);
  console.log(myInfo.address);
  console.log(myInfo.city + ",", myInfo.state, myInfo.zip);
}
printContact(myInfo);

let friend = {
    first: "Ted",
    last: "Czerniewski",
    age: 25,
    job: "Something in Texas",
    interests: "Gambling",
}