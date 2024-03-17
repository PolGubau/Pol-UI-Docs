"use client";
import React from "react";
import { Docs } from "contentlayer/generated";
import { Card } from "pol-ui";
const DocsList = ({ docs }: { docs: Docs[] }) => {
  const allDocsSorted = docs?.sort((a, b) =>
    a.order && b.order ? a.order - b.order : a.title.localeCompare(b.title)
  );

  const orderedBycategory: {
    [category: string]: Docs[];
  } = allDocsSorted.reduce((acc, doc) => {
    // return an array of objects with the category as {
    //  category : [doc_type]
    // items: [docs]
    // }
    if (!acc[doc.doc_type]) {
      acc[doc.doc_type] = [];
    }
    acc[doc.doc_type] = [...acc[doc.doc_type], doc];
    return acc;
  }, {});
  const allButBase = Object.keys(orderedBycategory).filter(
    (category) => category !== "base"
  );

  return (
    <div className="flex flex-col gap-20">
      <header className="flex gap-4">
        {orderedBycategory["base"].map((post: Docs) => (
          <Card
            key={post._id}
            href={"/docs/" + post.path}
            className="flex flex-1 p-4"
          >
            <h3 className="text-xl">{post.title}</h3>
            <p>{post.summary}</p>
          </Card>
        ))}
      </header>
      <section className="flex flex-col gap-10">
        {allButBase.map((category) => (
          <div key={category} className="flex flex-col gap-4 ">
            <h2 className="text-3xl first-letter:uppercase">{category}s</h2>
            <ul className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {orderedBycategory[category].map((post: Docs) => (
                <Card
                  key={post._id}
                  href={"/docs/" + post.path}
                  className="group "
                >
                  <h3 className="text-xl p-4">{post.title}</h3>
                </Card>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DocsList;
