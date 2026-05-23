import Head from "next/head";

type SeoProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export default function Seo({
  title = "Let Code",
  description = "A professional, modern web application",
  url,
  image,
}: SeoProps) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://eclaircode.vercel.app";
  const canonical = url ?? siteUrl;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}
