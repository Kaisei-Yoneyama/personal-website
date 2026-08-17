import type { NotFoundHandler } from "hono";

import ErrorPage from "../components/error-page";

const handler: NotFoundHandler = (c) => {
  c.status(404);
  return c.render(
    <ErrorPage
      code="404"
      heading="ページが見つかりません"
      description="お探しのページは移動または削除された可能性がございます。"
    />,
    { title: "404 Not Found" },
  );
};

export default handler;
