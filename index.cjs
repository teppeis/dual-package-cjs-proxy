Object.assign(module.exports, require("./dist/bundleSync.cjs"));

const asyncFunctions = ["getFileSize", "getStatusCode"];

// Proxy for exported async functions
asyncFunctions.forEach((name) => {
  module.exports[name] = (...args) =>
    import("./dist/index.js").then((ns) => ns[name](...args));
});
