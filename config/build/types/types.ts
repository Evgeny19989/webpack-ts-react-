export interface BuildPaths {
    entry: string,
    html: string,
    output:string
}

export type BuildsMode = 'development' | 'production'

export interface BuildOptions {
    port: number,
    paths: BuildPaths,
    mode:BuildsMode

}
