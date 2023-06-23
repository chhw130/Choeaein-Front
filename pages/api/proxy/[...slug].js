import { createProxyMiddleware } from "http-proxy-middleware";

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const apiProxy = createProxyMiddleware({
  target: "https://dev.curb.site/",
  //   target: "https://v2-myfavor-back-seed-db.onrender.com/",

  changeOrigin: true,
  pathRewrite: { [`^/api/proxy`]: "" },
  secure: false,
});

export default function (req, res) {
  apiProxy(req, res, (result) => {
    if (result instanceof Error) {
      console.log("result", result);
      throw result;
    }

    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
}
