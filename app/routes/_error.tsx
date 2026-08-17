import type { ErrorHandler } from "hono";

import ErrorPage from "../components/error-page";

const handler: ErrorHandler = (e, c) => {
  if ("getResponse" in e) {
    return e.getResponse();
  }
  console.error(e.message);
  c.status(500);
  return c.render(
    <ErrorPage
      code="500"
      heading="エラーが発生しました"
      description="しばらく時間をおいてから再度アクセスしてください。"
    />,
    { title: "Internal Server Error" },
  );
};

export default handler;
