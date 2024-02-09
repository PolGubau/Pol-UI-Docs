import { BigLink } from "app/components/BigLink";
import { Docs, allDocs } from "contentlayer/generated";
import React from "react";

const SimilarBlogs = ({ blog: p, slug }: { blog: Docs; slug: string }) => {
  const similarTechProjects = (): Docs[] => {
    // get 3 projects that has tech in common, if it's not the case, get up to 3 random projects

    const tags = p.tags;
    const otherBlogs = allDocs.filter((post) => post.slug !== `docs/${slug}`);
    const similarTechProjects = otherBlogs.filter((post) => {
      const commonTags = post.tags?.filter((tag) => tags?.includes(tag)) ?? [];
      return commonTags.length > 0;
    });

    if (similarTechProjects.length > 3) {
      return similarTechProjects.slice(0, 3);
    }

    return otherBlogs.slice(0, 2);
  };
  return (
    <>
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mt-16">
        Similar guides
      </h2>
      <div className="flex flex-wrap gap-2">
        {similarTechProjects().map((p) => {
          const realSlug = p.slug.replace("docs/", "");
          return <BigLink key={p.slug} name={p.title} slug={realSlug} />;
        })}
      </div>
    </>
  );
};

export default SimilarBlogs;
