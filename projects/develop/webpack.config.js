const path = require("path");
const __HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "./src/main.js"),
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 9000,
        compress: true, // http gzip
    },
    plugins: [
        new __HtmlWebpackPlugin({
            template: path.join(__dirname, "./public/index.html"),
        }),
    ],
};
