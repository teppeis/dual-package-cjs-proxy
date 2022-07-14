const sut = require("../index.cjs");

sut.getFileSize(__filename).then((size) => console.log(`${size} bytes`));
sut
  .getStatusCode("https://www.google.com")
  .then((statusCode) => console.log(`Status Code: ${statusCode}`));
console.log(sut.syncFoo());
