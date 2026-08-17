type NormalizedBase<Base extends string> = Base extends `${infer Normalized}/` ? Normalized : Base;

/**
 * ベースパスを基準としたパスを作成する関数を返す。
 * スキーム相対 URL は外部リソース URL になり得るため作成できない。
 * @param base ベースパス
 * @returns ベースパスを基準としたパスを作成する関数
 * @throws {TypeError} ベースパスに不正な文字が含まれる場合
 * @example
 * const sitePath = createSitePath("/personal-website");
 * sitePath("/blog"); // "/personal-website/blog"
 */
function createSitePath<const Base extends `/${string}`>(
  base: Base &
    (Base extends `//${string}` | `${string}${"\\" | "\t" | "\n" | "\r"}${string}`
      ? never
      : unknown),
) {
  if (base.startsWith("//") || /[\\\t\n\r]/.test(base)) {
    throw new TypeError(`Invalid base path: ${JSON.stringify(base)}`);
  }

  const normalizedBase = (base.endsWith("/") ? base.slice(0, -1) : base) as NormalizedBase<Base>;

  return <const Path extends `/${string}`>(
    path: Path &
      (Path extends `//${string}` | `${string}${"\\" | "\t" | "\n" | "\r"}${string}`
        ? never
        : unknown),
  ): `${NormalizedBase<Base>}${Path}` => {
    if (path.startsWith("//") || /[\\\t\n\r]/.test(path)) {
      throw new TypeError(`Invalid site path: ${JSON.stringify(path)}`);
    }

    return `${normalizedBase}${path}`;
  };
}

const trimmedBase = import.meta.env.BASE_URL.split("/").filter(Boolean).join("/");

/**
 * ベースパスを基準としたパスを作成して返す。
 * @param path パス
 * @returns ベースパスを基準としたパス
 * @throws {TypeError} パスに不正な文字が含まれる場合
 * @example
 * withBase("/blog"); // "/personal-website/blog"
 */
export const withBase = createSitePath(trimmedBase ? `/${trimmedBase}` : "/");
