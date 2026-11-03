import { Html, Head, Main, NextScript } from "next/document";

const SITE_URL = "https://dev-find.vercel.app/";
const SITE_DESCRIPTION =
  "devFind is an open source platform for developers to showcase their skills and connect with potential collaborators, in a user-friendly and searchable format.";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>devFIND</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="devFind - Discover and Connect with Skilled Developers" />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}og-image.png`} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="devFind - Discover and Connect with Skilled Developers" />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}og-image.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
