import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";

const isProd = process.env.NODE_ENV === "production";

const config = {
  input: "src/server/index.ts",
  output: [
    {
      dir: "dist/server",
      format: "cjs",
      sourcemap: !isProd,
    },
  ],
  plugins: [
    peerDepsExternal({ includeDependencies: true }),
    resolve({
      preferBuiltins: true,
      extensions: [".mjs", ".js", "json", ".node", ".jsx", ".ts", ".tsx"],
    }),
    esbuild({
      minify: isProd,
      target: "esnext",
      define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

module.exports = config;
