Object.assign(module.exports, require("./dist/bundle.cjs"));

const asyncFunctions = ["getFileSize", "getStatusCode"];

asyncFunctions.forEach((name) => {
  module.exports[name] = (...args) =>
    import("./dist/index.js").then((i) => i[name](...args));
});
