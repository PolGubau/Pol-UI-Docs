import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx/mdx";
import { allDocs } from "contentlayer/generated";
import { BigLink } from "app/components/BigLink";
import { cn } from "lib/utils";
import Link from "next/link";
import { metadata } from "lib/constants";

export const dynamic = "force-static";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allDocs.find((d) => d.path === `${params.slug}`);

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
    ? `${metadata.links.website}/images/${slug}/${cover}`
    : `${metadata.links.website}/og?title=${title}`;
  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    title,
    description,
    keywords: post.tags,
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

  // a h1 is from # to \n
  // a h2 is from ## to \n
  // a h3 is from ### to \n
  // a h4 is from #### to \n
  // a h5 is from ##### to \n
  // a h6 is from ###### to \n

  const allHeadings = doc.body.raw.match(/(#{1,6})\s(.*)/g) ?? [];
  const headings =
    allHeadings?.map((heading) => {
      const level = heading.match(/(#{1,6})/g)[0].length;
      const text = heading.replace(/(#{1,6})\s/, "");
      return { level, text };
    }) ?? [];

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
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Updated {formatDate(doc.publishedAt)}
        </p>
      </header>
      <h1 className="text-2xl md:text-4xl mb-6 mt-1 font-semibold">
        {doc.title}
      </h1>
      {/* toc */}
      {headings.length > 2 && (
        <aside className="hidden md:flex flex-col border border-secondary/50 p-4 rounded-2xl">
          <h3 className="text-sm">Table of contents</h3>
          <ul className="flex flex-col">
            {headings.map((heading) => {
              const { text, level } = heading;
              return (
                <Link
                  key={heading.text}
                  href={`#${text.toLowerCase().split(" ").join("-")}`}
                  className="w-full flex flex-1"
                >
                  <li
                    className={cn(
                      "text-secondary-500 dark:text-secondary-400 text-xs px-2 hover:bg-primary-900 py-1 rounded-md w-full",
                      {
                        "pl-2": level === 2,
                        "pl-6": level === 3,
                        "pl-10": level === 4,
                        "pl-16": level === 5,
                        "pl-20": level === 6,
                      }
                    )}
                  >
                    {text}
                  </li>
                </Link>
              );
            })}
          </ul>
        </aside>
      )}
      <article className="mb-8 w-full  flex flex-col gap-6">
        <Mdx code={doc.body.code} />

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
