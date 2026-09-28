import { createRoute } from "honox/factory";

import OgImage from "../../components/og-image";
import { renderOgImage } from "../../lib/og-image";

export default createRoute(async (c) => {
  const ogImage = await renderOgImage(
    <OgImage
      label="Web Developer"
      title="Kaisei Yoneyama"
      description="プログラミング教材制作に携わっています。個人開発では、ウェブアプリケーション開発をはじめ、ブラウザー拡張機能開発やボット開発に勤しんでいます。"
    />,
  );

  return c.body(ogImage, 200, { "Content-Type": "image/png" });
});
