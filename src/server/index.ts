import express, { RequestHandler } from "express";
import compression from "compression";
import slashes from "connect-slashes";
import history from "connect-history-api-fallback";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  // Setup static middleware for development or production
  const staticMiddleware: RequestHandler[] = [];

  if (process.env.NODE_ENV !== "production") {
    staticMiddleware.push(express.static("./src/static"));
  } else {
    staticMiddleware.push(express.static("./dist/client"));
  }

  app.use(compression());
  app.use(slashes(false));
  app.use(staticMiddleware);

  if (process.env.NODE_ENV === "production") {
    app.use(history());
  }

  if (process.env.NODE_ENV !== "production") {
    const fs = await import("fs");
    const path = await import("path");
    const createViteServer = (await import("vite")).createServer;
    const vite = await createViteServer({
      server: { middlewareMode: true },
    });

    app.use(vite.middlewares);

    app.use(async (req, res) => {
      const url = req.originalUrl;

      try {
        let template = fs.readFileSync(
          path.resolve(__dirname, "../client/index.html"),
          "utf-8"
        );
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end(e.message);
      }
    });
  }

  app.use(staticMiddleware);

  app.listen(port);
})();
