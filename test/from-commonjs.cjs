const { getFileSize, getStatusCode, syncFoo } = require("../index.cjs");

console.log("`require` from CommonJS\n");

(async () => {
  const size = await getFileSize(__filename);
  console.log(`${size} bytes`);

  const statusCode = await getStatusCode("https://www.google.com");
  console.log(`Status Code: ${statusCode}`);

  console.log(syncFoo());
})();
