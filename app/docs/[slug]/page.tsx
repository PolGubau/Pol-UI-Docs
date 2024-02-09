import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx";
import { allDocs } from "contentlayer/generated";
import { BigLink } from "app/components/BigLink";

export const dynamic = "force-static";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allDocs?.find((post) => post.slug === `blog/${params.slug}`);

  if (!post) {
    return {
      title: "Not found",
      description: "This blog was not found.",

      openGraph: {
        title: "Not found",
        description: "This blog was not found.",
        type: "article",
        url: `https://polgubau.com/blog/${params.slug}`,
        images: [
          {
            url: `https://polgubau.com/og?title=Not found`,
          },
        ],
      },
    };
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    cover,
    slug,
  } = post;
  const ogImage = cover
    ? `https://polgubau.com/images/${slug}/${cover}`
    : `https://polgubau.com/og?title=${title}`;
  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Pol Gubau Amores`,
      description,
      type: "article",
      publishedTime,
      url: `https://polgubau.com/${slug}`,
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
  const doc = allDocs.find((d) => d.path === `${params.slug}`);

  const indexOfDoc = allDocs.findIndex((d) => d.path === `${params.slug}`) ?? 0;
  const nextDoc = allDocs[indexOfDoc + 1] ?? allDocs[allDocs.length - 1];

  if (!doc) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(doc.structuredData),
        }}
      ></script>

      <header className="flex gap-1 items-center">
        <h2 className="text-sm">{doc.title}</h2> <span>•</span>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Updated {formatDate(doc.publishedAt)}
        </p>
      </header>
      <article className="mb-8 w-full  flex flex-col gap-6">
        <Mdx code={doc.body.code} />

        <div className="flex gap-4">
          <BigLink name={`Next up: ${nextDoc.title}`} slug={nextDoc.slug} />
        </div>
      </article>
    </section>
  );
}
