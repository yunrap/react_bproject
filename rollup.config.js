import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

module.exports = {
  input: "src/main.js",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [nodeResolve(), commonjs()],
};
