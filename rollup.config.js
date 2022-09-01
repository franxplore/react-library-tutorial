import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
// import postcss from "rollup-plugin-postcss";


const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      image(),
      typescript({ tsconfig: "./tsconfig.json"}),
      // postcss(),
    ],
  },
  {
    input: "dist/esm/index.d.ts", // had to be corrected: dist/esm/types/index.d.ts -> dist/esm/index.d.ts
    output: [{file: "dist/index.d.ts", format: "esm"}],
    plugins: [dts()],
    // external: [/\.css$/],
  }
]