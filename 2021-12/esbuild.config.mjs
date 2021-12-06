import esbuildServe from "esbuild-serve";

const dist = process.env.NODE_ENV === "production";

esbuildServe(
  {
    entryPoints: ["./src/script.tsx"],
    bundle: true,
    outfile: "./app/script.js",
    platform: "browser",
    target: "esnext",
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV ?? "development",
      ),
    },
    minify: dist,
    sourcemap: true,
  },
  {
    port: 3030,
    root: "./app",
  },
);
