import {buildWebServer} from "./buildWebServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";

export function buildWebpack(options:BuildOptions) : any {
    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        output: {
            filename: '[name][contenthash].js',
            path: options.paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        devServer: buildWebServer(options)
    }
}
