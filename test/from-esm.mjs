import { fileURLToPath } from "node:url";
import { getFileSize, getStatusCode, syncFoo } from "../dist/index.js";

console.log("`import` from ESM\n");

const size = await getFileSize(fileURLToPath(import.meta.url));
console.log(`${size} bytes`);

const statusCode = await getStatusCode("https://www.google.com");
console.log(`Status Code: ${statusCode}`);

console.log(syncFoo());
