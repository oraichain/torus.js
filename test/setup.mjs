import Register from "@babel/register";
import path from "path";
import { register } from "ts-node";

register({
  project: path.resolve(".", "tsconfig.json"),
  transpileOnly: true,
  compilerOptions: { module: "esnext" },
});

Register({
  extensions: [".ts", ".js"],
  rootMode: "upward",
});
