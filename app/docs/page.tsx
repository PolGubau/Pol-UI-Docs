import type { Metadata } from "next";
import { allDocs } from "contentlayer/generated";
import DocsList from "./components/BlogList/DocsList";

export const metadata: Metadata = {
  title: "Docs | Pol-ui ",
  description: "Explore and discover the documentation for Pol-ui.",
  keywords: [
    "react",
    "ui",
    "interfaces",
    "components",
    "design",
    "development",
    "docs",
    "pol-ui docs",
  ],
  authors: {
    url: "https://polgubau.com",
    name: "Pol Gubau Amores",
  },
  openGraph: {
    title: "Docs | Pol-ui ",
    description:
      "Explore and discover the documentation for Pol-ui, a collection of React components and UI elements.",
    url: "https://ui.polgubau.com/docs",
    locale: "en_US",
    images: [
      {
        url: "https://ui.polgubau.com/logo.png",
        width: 1920,
        height: 1080,
        alt: "Pol Gubau Amores' website preview",
      },
    ],
    type: "website",
  },
};

export default function DocsPage() {
  return <DocsList docs={allDocs} />;
}
