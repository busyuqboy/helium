import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve("./src/client/"),
  build: {
    outDir: "../../dist/client",
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  plugins: [reactRefresh()],
  publicDir: "../static",
});
