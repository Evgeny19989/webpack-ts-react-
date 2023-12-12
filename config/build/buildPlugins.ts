import {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildPlugins({paths}: BuildOptions): Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({template: paths.html}),
        new MiniCssExtractPlugin()
    ]
}
