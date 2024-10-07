import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-expect-error -- come on Broph Dawg
import { jsonRoutes } from "remix-json-routes";
import { route, layout } from "@react-router/dev/routes";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      ignoredRouteFiles: ["**/*"],
      routes(defineRoutes) {
        return jsonRoutes(defineRoutes, [
          layout("layouts/marketing.tsx", [
            route("/", "routes/home.tsx"),
            route("/about", "routes/about.tsx"),
          ]),
          route("/app", "routes/app.tsx"),
        ]);
      },
    }),
    tsconfigPaths(),
  ],
});
