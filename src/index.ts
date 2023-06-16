import { ViteSharpOptimazer, ViteSharpOptimazerOptions } from "./libs/ViteSharpOptimazer";

export function ViteImageOretimaizer(opts: ViteSharpOptimazerOptions = {}): any {
  return {
    name: "ViteImageOretimaizer",
    async writeBundle(_options: any, bundle: any) {
      new ViteSharpOptimazer(_options.dir, opts, bundle);
    },
  };
}
