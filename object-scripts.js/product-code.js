"use strict";

function parsePartCode(partCode) {
  let colon = partCode.indexOf(":");
  let dash = partCode.indexOf("-");
  let supplierCode = partCode.substring(0, colon);
  let productNumber = partCode.substring(colon + 1, dash);
  let size = partCode.substring(dash + 1);
}
let partCode = "XYZ:1234-L";
let part1 = parsePartCode(partCode);
console.log("Supplier:" + part1.supplierCode + "Product Number:" + part1.productNumber + "Size:" + part1.size);
