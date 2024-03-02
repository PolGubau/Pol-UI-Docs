"use client";
import React from "react";
import { Docs } from "contentlayer/generated";
import { Card } from "pol-ui";
const DocsList = ({ docs }: { docs: Docs[] }) => {
  const allDocsSorted = docs?.sort((a, b) =>
    a.order && b.order ? a.order - b.order : a.title.localeCompare(b.title)
  );

  const orderedBycategory = allDocsSorted.reduce((acc, doc) => {
    if (!acc[doc.doc_type]) {
      acc[doc.doc_type] = [];
    }
    acc[doc.doc_type].push(doc);
    return acc;
  }, {});

  return (
    <section className="flex flex-col gap-8">
      {Object.keys(orderedBycategory).map((category) => (
        <div key={category} className="flex flex-col gap-4">
          <h2 className="text-3xl">Components</h2>
          <ul className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {orderedBycategory[category].map((post) => (
              <Card key={post._id} href={"/docs/" + post.path}>
                <h3 className="text-xl p-4">{post.title}</h3>
              </Card>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default DocsList;
