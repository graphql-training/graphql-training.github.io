import React from "react";

const ANALYTICS_KEY = "";
const buildTimestamp = new Date().toISOString().replace(/:/g, "-");

const Html = ({ postBodyComponents, body }) => (
  <html lang="en">
    <head>
      <script src="https://use.fontawesome.com/c72bfae6f9.js" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href={`/styles.css?t=${encodeURIComponent(buildTimestamp)}`}
      />
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

export default Html;
