import esbuildServe from "esbuild-serve";

const dist = !process.argv.includes('-w');

esbuildServe(
  {
    entryPoints: ["./src/script.tsx"],
    bundle: true,
    outfile: "./app/script.js",
    platform: "browser",
    target: "esnext",
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        dist : 'production' : "development",
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
