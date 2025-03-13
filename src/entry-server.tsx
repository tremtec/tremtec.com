// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="TremTec - Innovative Technology Solutions"
          />
          <meta
            name="keywords"
            content="TremTec, Technology, Solutions, Innovation"
          />
          <meta name="author" content="TremTec Team" />

          <title>TremTec - Home</title>

          <link rel="icon" href="/favicon.ico" />

          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
