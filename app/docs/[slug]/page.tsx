import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx/mdx";
import { Docs, allDocs } from "contentlayer/generated";
import { BigLink } from "app/components/BigLink";
import { metadata } from "lib/constants";
import { Toc } from "app/components/toc";

export const dynamic = "force-static";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const doc = allDocs.find((d) => d.path === params.slug) ?? undefined;

  if (doc) {
    const {
      title,
      publishedAt: publishedTime,
      summary: description,
      cover,
      slug,
    } = doc;

    const ogImage = cover
      ? `${metadata.links.website}/images/${slug}/${cover}`
      : `${metadata.links.website}/og?title=${title}`;
    const previousImages = (await parent).openGraph?.images ?? [];

    return {
      title,
      description,
      keywords: doc?.tags ?? ["pol-ui"],
      openGraph: {
        title: `${title} | ${metadata.longName}`,
        description,
        type: "article",
        publishedTime,
        url: `${metadata.links.website}/${slug}`,
        images: [ogImage, ...previousImages],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  }

  return {
    title: "Not found",
    description: "This blog was not found.",

    openGraph: {
      title: "Not found",
      description: "This blog was not found.",
      type: "article",
      url: `${metadata.links.website}/docs/${params.slug}`,
      images: [
        {
          url: `https://polgubau.com/og?title=Not found`,
        },
      ],
    },
  };
}

function formatDate(date: string) {
  const d = new Date(date);

  const fullDate = d.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate}`;
}

export default function DocPage({ params }) {
  const doc: Docs | undefined = allDocs.find((d) => d.path === params.slug);

  const indexOfDoc = allDocs.findIndex((d) => d.path === `${params.slug}`) ?? 0;
  const nextDoc = allDocs[indexOfDoc + 1] ?? allDocs[allDocs.length - 1];

  if (!doc) {
    notFound();
  }
  const raw = doc?.body.raw;
  const structuredData = doc?.structuredData ?? {};

  const code = doc?.body.code;
  const title = doc?.title ?? "Not found";

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      ></script>
      {doc?.publishedAt && (
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Updated {formatDate(doc?.publishedAt)}
        </p>
      )}
      <h1 className="text-2xl md:text-4xl mb-6 mt-1 font-semibold">{title}</h1>
      <Toc text={raw} />
      <article className="mb-8 w-full  flex flex-col gap-6">
        <Mdx code={code} />

        <div className="flex gap-4">
          <BigLink
            name={`Next up: ${nextDoc.title}`}
            slug={`/${nextDoc.slug}`}
          />
        </div>
      </article>
    </section>
  );
}
