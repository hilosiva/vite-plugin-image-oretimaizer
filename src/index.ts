import { ViteSharpOptimazer, ViteSharpOptimazerOptions } from "./libs/ViteSharpOptimazer";

export function viteImageOretimaizer(opts: ViteSharpOptimazerOptions = {}): any {
  return {
    name: "viteImageOretimaizer",
    async writeBundle(_options: any, bundle: any) {
      new ViteSharpOptimazer(_options.dir, opts, bundle);
    },
  };
}
