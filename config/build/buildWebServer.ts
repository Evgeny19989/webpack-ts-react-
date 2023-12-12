import {BuildOptions} from "./types/types";

export function buildWebServer(options:BuildOptions): any {
    return {
        port: options.port,
        open: true
    }
}
