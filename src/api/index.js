let env = process.env.NODE_ENV;
let module;

if (env === "test") {
  module = require("./test.js").default;
} else {
  module = require(`./${env}.js`).default;
}

export default module;
