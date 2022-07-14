import { fileURLToPath } from "url";
import * as sut from "../dist/index.js";

sut
  .getFileSize(fileURLToPath(import.meta.url))
  .then((size) => console.log(`${size} bytes`));
sut
  .getStatusCode("https://www.google.com")
  .then((statusCode) => console.log(`Status Code: ${statusCode}`));
console.log(sut.syncFoo());
