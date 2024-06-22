import * as React from "react";
import Head from "next/head";

export const PageHead: React.FC<{
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  twitter?: string;
}> = ({
  title = "tnkr.ai",
  description = "Build robots in your garage.",
  image = "/favicon.ico",
  url = "https://www.tnkr.ai/",
  twitter,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="tnkr" />
      <meta property="twitter:domain" content="tnkr.ai" />

      {twitter && <meta name="twitter:creator" content={`@${twitter}`} />}

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

      {image ? (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={image} />
          <meta property="og:image" content={image} />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}

      {url && (
        <>
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="twitter:url" content={url} />
        </>
      )}

      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <title>{title}</title>
    </Head>
  );
};

export default PageHead;
