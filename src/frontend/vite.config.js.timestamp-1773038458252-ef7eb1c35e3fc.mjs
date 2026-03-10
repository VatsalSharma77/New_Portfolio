// vite.config.js
import { fileURLToPath, URL } from "url";
import react from "file:///F:/Masai%20Course/Semester_1/HTML_CSS_JS_React/Projects/vatsal-portfolio/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.4.21_@types+node@20.19.24_/node_modules/@vitejs/plugin-react/dist/index.js";
import { defineConfig } from "file:///F:/Masai%20Course/Semester_1/HTML_CSS_JS_React/Projects/vatsal-portfolio/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.24/node_modules/vite/dist/node/index.js";
import environment from "file:///F:/Masai%20Course/Semester_1/HTML_CSS_JS_React/Projects/vatsal-portfolio/node_modules/.pnpm/vite-plugin-environment@1.1_2e4e7f85c992eae48747d8ac80b0af3f/node_modules/vite-plugin-environment/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///F:/Masai%20Course/Semester_1/HTML_CSS_JS_React/Projects/vatsal-portfolio/src/frontend/vite.config.js";
var ii_url = process.env.DFX_NETWORK === "local" ? `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:8081/` : `https://identity.internetcomputer.org/`;
process.env.II_URL = process.env.II_URL || ii_url;
process.env.STORAGE_GATEWAY_URL = process.env.STORAGE_GATEWAY_URL || "https://blob.caffeine.ai";
var vite_config_default = defineConfig({
  logLevel: "error",
  build: {
    emptyOutDir: true,
    sourcemap: false,
    minify: false
  },
  css: {
    postcss: "./postcss.config.js"
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis"
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true
      }
    }
  },
  plugins: [
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    environment(["II_URL"]),
    environment(["STORAGE_GATEWAY_URL"]),
    react()
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(new URL("../declarations", __vite_injected_original_import_meta_url))
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    ],
    dedupe: ["@dfinity/agent"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxNYXNhaSBDb3Vyc2VcXFxcU2VtZXN0ZXJfMVxcXFxIVE1MX0NTU19KU19SZWFjdFxcXFxQcm9qZWN0c1xcXFx2YXRzYWwtcG9ydGZvbGlvXFxcXHNyY1xcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcTWFzYWkgQ291cnNlXFxcXFNlbWVzdGVyXzFcXFxcSFRNTF9DU1NfSlNfUmVhY3RcXFxcUHJvamVjdHNcXFxcdmF0c2FsLXBvcnRmb2xpb1xcXFxzcmNcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L01hc2FpJTIwQ291cnNlL1NlbWVzdGVyXzEvSFRNTF9DU1NfSlNfUmVhY3QvUHJvamVjdHMvdmF0c2FsLXBvcnRmb2xpby9zcmMvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwidXJsXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gXCJ2aXRlLXBsdWdpbi1lbnZpcm9ubWVudFwiO1xuXG5jb25zdCBpaV91cmwgPVxuICBwcm9jZXNzLmVudi5ERlhfTkVUV09SSyA9PT0gXCJsb2NhbFwiXG4gICAgPyBgaHR0cDovL3JkbXg2LWphYWFhLWFhYWFhLWFhYWRxLWNhaS5sb2NhbGhvc3Q6ODA4MS9gXG4gICAgOiBgaHR0cHM6Ly9pZGVudGl0eS5pbnRlcm5ldGNvbXB1dGVyLm9yZy9gO1xuXG5wcm9jZXNzLmVudi5JSV9VUkwgPSBwcm9jZXNzLmVudi5JSV9VUkwgfHwgaWlfdXJsO1xucHJvY2Vzcy5lbnYuU1RPUkFHRV9HQVRFV0FZX1VSTCA9XG4gIHByb2Nlc3MuZW52LlNUT1JBR0VfR0FURVdBWV9VUkwgfHwgXCJodHRwczovL2Jsb2IuY2FmZmVpbmUuYWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgbG9nTGV2ZWw6IFwiZXJyb3JcIixcbiAgYnVpbGQ6IHtcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gIH0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IFwiLi9wb3N0Y3NzLmNvbmZpZy5qc1wiLFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgZGVmaW5lOiB7XG4gICAgICAgIGdsb2JhbDogXCJnbG9iYWxUaGlzXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICBcIi9hcGlcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzEyNy4wLjAuMTo0OTQzXCIsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGVudmlyb25tZW50KFwiYWxsXCIsIHsgcHJlZml4OiBcIkNBTklTVEVSX1wiIH0pLFxuICAgIGVudmlyb25tZW50KFwiYWxsXCIsIHsgcHJlZml4OiBcIkRGWF9cIiB9KSxcbiAgICBlbnZpcm9ubWVudChbXCJJSV9VUkxcIl0pLFxuICAgIGVudmlyb25tZW50KFtcIlNUT1JBR0VfR0FURVdBWV9VUkxcIl0pLFxuICAgIHJlYWN0KCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAge1xuICAgICAgICBmaW5kOiBcImRlY2xhcmF0aW9uc1wiLFxuICAgICAgICByZXBsYWNlbWVudDogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi4vZGVjbGFyYXRpb25zXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogXCJAXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBkZWR1cGU6IFtcIkBkZmluaXR5L2FnZW50XCJdLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZiLFNBQVMsZUFBZSxXQUFXO0FBQ2hlLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGlCQUFpQjtBQUhxUSxJQUFNLDJDQUEyQztBQUs5VSxJQUFNLFNBQ0osUUFBUSxJQUFJLGdCQUFnQixVQUN4Qix1REFDQTtBQUVOLFFBQVEsSUFBSSxTQUFTLFFBQVEsSUFBSSxVQUFVO0FBQzNDLFFBQVEsSUFBSSxzQkFDVixRQUFRLElBQUksdUJBQXVCO0FBRXJDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBWSxPQUFPLEVBQUUsUUFBUSxZQUFZLENBQUM7QUFBQSxJQUMxQyxZQUFZLE9BQU8sRUFBRSxRQUFRLE9BQU8sQ0FBQztBQUFBLElBQ3JDLFlBQVksQ0FBQyxRQUFRLENBQUM7QUFBQSxJQUN0QixZQUFZLENBQUMscUJBQXFCLENBQUM7QUFBQSxJQUNuQyxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsY0FBYyxJQUFJLElBQUksbUJBQW1CLHdDQUFlLENBQUM7QUFBQSxNQUN4RTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDOUQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRLENBQUMsZ0JBQWdCO0FBQUEsRUFDM0I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
