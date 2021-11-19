import path from "path";

export default {
    // set the enviroment
  mode: "development",
  devtool: "eval-source-map",
  // app entry point
  entry: "./src/index.js",
 // outpur: where it should create our dev bundle
 // Note: In development mode, No actual files are generated. Files are served from
 //this directory from memory.
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  // module: in here we tell webpack how to handle files
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};