import {ModuleOptions} from "webpack";

export function buildLoaders(): ModuleOptions['rules'] {


    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // MiniCssExtractPlugin.loader if you want .css file
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        cssLoader,
        tsLoader
    ]
}
