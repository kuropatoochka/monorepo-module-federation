import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoader } from "./buildLoader";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack( options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options
  const isDev = options.mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}