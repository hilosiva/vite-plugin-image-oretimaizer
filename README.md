# vite-plugin-image-oretimaizer

[vite-plugin-image-oretimaizer](https://github.com/hilosiva/vite-plugin-image-oretimaizer) は、ビルド時に[Sharp.js](https://sharp.pixelplumbing.com/) を利用して画像アセットを最適化する俺流の [Vite](https://ja.vitejs.dev/) 用プラグイン。

[![Publish package to GitHub Packages](https://github.com/hilosiva/vite-plugin-image-oretimaizer/actions/workflows/auto-publish.yml/badge.svg?branch=main)](https://github.com/hilosiva/vite-plugin-image-oretimaizer/actions/workflows/auto-publish.yml)

## 特徴

画像アセットを圧縮し、`.jpg/.jpeg`と`.png`形式の画像は、`.webp` や`.avif` ファイルも生成します。

サポートするファイル形式

- `.jpg/.jpeg`
- `.png`
- `.gif`
- `.webp`
- `.avif`

## インストール

■ npm の場合

```console
  npm i @shibajuku/vite-plugin-image-oretimaizer -D
```

■ yarn の場合

```console
  yarn add @shibajuku/vite-plugin-image-oretimaizer -D
```

■ pnpm の場合

```console
  pnpm i @shibajuku/vite-plugin-image-oretimaizer -D
```

> **警告**
>
> vite-plugin-image-oretimaizer は内部で[Sharp.js](https://sharp.pixelplumbing.com/) を利用しています。自動でインストールはされませんので、予めご自身で開発依存関係として追加して下さい。
>
> ```console
> npm i sharp -D
> ```

## 使用方法

「vite.config.js」でインポートし、プラグインに追加してください。

```javascript
import { defineConfig } from "vite";
import { ViteImageOretimaizer } from "@hilosiva/ViteImageOretimaizer"; // 追加

export default defineConfig({
  plugins: [
    // 追加
    ViteImageOretimaizer({
      /* オプション */
    }),
  ],
});
```

下記のコマンドでビルドを行うことで圧縮が実行されます。

```console
npm run build
```

> **注意**
>
> vite-plugin-image-oretimaizer は「[public](https://ja.vitejs.dev/guide/assets.html#public-%E3%83%86%E3%82%99%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA)」フォルダ内の静的アセットには実行されません。
>
> また、Vite は、[`build.assetsInlineLimit`](https://ja.vitejs.dev/config/build-options.html#build-assetsinlinelimit)の設定値より小さなサイズ（デフォルト：`4KB`）の画像は base64 URL としてインライン化されるため、この設定値より大きなサイズの画像にのみ vite-plugin-image-oretimaizer が実行されます。
>
> インライン化を無効にするには、、[`build.assetsInlineLimit`](https://ja.vitejs.dev/config/build-options.html#build-assetsinlinelimit)の設定値を「`0`」にして下さい。
>
> 「vite.config.js」
>
> ```javascript
> export default defineConfig({
>  plugins: [
>    ViteImageOretimaizer({
>      /* オプション */
>    }),
>  ],
>
>  ...
>
>  build: {
>    assetsInlineLimit: 0, // base64 URL としてのインライン化を無効
>  },
> });
> ```

## オプション

### `supportedExts`

- タイプ： Array
- デフォルト： `[".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"]`

サポートする画像ファイルの形式。

これらの画像形式の画像が圧縮の対象となります。

### `generate.inputExts`

- タイプ： Array
- デフォルト： [".jpg", ".jpeg", ".png"]

`generate.outputExts` に指定した形式の画像を生成する対象となる画像形式。

### `generate.outputExts`

- タイプ： Array
- デフォルト： [".webp", ".avif"]

新たに生成する画像形式。

### `generate.preserveExt`

- タイプ： Bool
- デフォルト： `false`

自動生成する際、元の拡張子を保持するかどうか

`true`にすると、元の拡張子を保持し、後ろに新しい拡張子を追加します。 例： `sample.jpg.webp`

`false`にすると、元の拡張子を新しい拡張子に置き換えます。 例： `sample.webp`

### `jpg`

- タイプ： Object
- デフォルト： [Sharp.js の 「jpeg」オプション](https://sharp.pixelplumbing.com/api-output#jpeg)のデフォルト値

`.jpg` の圧縮設定。

[Sharp.js の 「jpeg」オプション](https://sharp.pixelplumbing.com/api-output#jpeg)と同じ設定が使えます。

### `jpeg`

- タイプ： Object
- デフォルト： [Sharp.js の 「jpeg」オプション](https://sharp.pixelplumbing.com/api-output#jpeg)のデフォルト値

`.jpeg` の圧縮設定。

[Sharp.js の 「jpeg」オプション](https://sharp.pixelplumbing.com/api-output#jpeg)と同じ設定が使えます。

### `png`

- タイプ： Object
- デフォルト： [Sharp.js の 「png」オプション](https://sharp.pixelplumbing.com/api-output#png)のデフォルト値

`.png` の圧縮設定。

[Sharp.js の 「png」オプション](https://sharp.pixelplumbing.com/api-output#png)と同じ設定が使えます。

### `.gif`

- タイプ： Object
- デフォルト： [Sharp.js の 「gif」オプション](https://sharp.pixelplumbing.com/api-output#gif)のデフォルト値

`.gif` の圧縮設定。

[Sharp.js の 「gif」オプション](https://sharp.pixelplumbing.com/api-output#gif)と同じ設定が使えます。

### `webp`

- タイプ： Object
- デフォルト： [Sharp.js の 「webp」オプション](https://sharp.pixelplumbing.com/api-output#webp)のデフォルト値

`.webp` の圧縮設定。

[Sharp.js の 「webp」オプション](https://sharp.pixelplumbing.com/api-output#webp)と同じ設定が使えます。

### `avif`

- タイプ： Object
- デフォルト： [Sharp.js の 「avif」オプション](https://sharp.pixelplumbing.com/api-output#avif)のデフォルト値

`.avif` の圧縮設定。

[Sharp.js の 「avif」オプション](https://sharp.pixelplumbing.com/api-output#avif)と同じ設定が使えます。

---

例：vite.config.js

```javascript
import { defineConfig } from "vite";
import { ViteImageOretimaizer } from "@hilosiva/ViteImageOretimaizer";

export default defineConfig({
  plugins: [
    ViteImageOretimaizer({
      generate: {
        preserveExt: true,
      },
      jpg: {
        quality: 70,
        mozjpeg: true,
      },
      jpeg: {
        quality: 70,
        mozjpeg: true,
      },
      png: {
        quality: 70,
      },
      webp: {
        quality: 50,
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ],
  build: {
    assetsInlineLimit: 0,
  },
});
```
