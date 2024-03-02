"use client";
import React from "react";
import { Docs } from "contentlayer/generated";
import { Card } from "pol-ui";
const DocsList = ({ docs }: { docs: Docs[] }) => {
  const allDocsSorted = docs?.sort((a, b) =>
    a.order && b.order ? a.order - b.order : a.title.localeCompare(b.title)
  );

  const allBase = allDocsSorted?.filter((d) => d.doc_type === "base").reverse();

  const allComponents = allDocsSorted?.filter(
    (d) => d.doc_type === "component"
  );
  const allHooks = allDocsSorted?.filter((d) => d.doc_type === "hook");
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl">Components</h2>
        <ul className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allComponents.map((post) => (
            <Card key={post._id} href={"/docs/" + post.path}>
              <h3 className="text-2xl p-4">{post.title}</h3>
            </Card>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl">Hooks</h2>
        <ul className="gap-4 grid grid-cols-3">
          {allHooks.map((post) => (
            <Card key={post._id} href={"/docs/" + post.path}>
              <h3 className="text-2xl p-4">{post.title}</h3>
            </Card>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DocsList;
