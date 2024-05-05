"use client";
import React from "react";
import { Button, Card, ContainerScroll } from "pol-ui";
import Link from "next/link";
export const ContainerScrollComp = () => {
  const cards = [
    {
      title: "💡 Intuitive Components",
      description:
        "Elevate your UI with Pol-UI's intuitive and customizable components.",
    },
    {
      title: "🎨 Flexible Theming",
      description:
        "Craft stunning interfaces with Pol-UI's flexible theming capabilities.",
    },
    {
      title: "📚 Comprehensive Documentation",
      description:
        "Master Pol-UI quickly with our detailed documentation and examples.",
    },
    {
      title: "🛠 Tailwind CSS Integration",
      description:
        "Empower your development process with seamless Tailwind CSS integration.",
    },
    {
      title: "⚙️ Built-in Hooks and Services",
      description:
        "Boost productivity with Pol-UI's built-in hooks and services.",
    },
    {
      title: "🌐 Vibrant Community",
      description:
        "Join a thriving community of developers and designers shaping the future of Pol-UI.",
    },
  ];

  return (
    <>
      <ContainerScroll
        className="hidden sm:flex"
        titleComponent={
          <h2 className="flex flex-col gap-2">
            <span className="text-2xl font-bold text-black dark:text-white">
              Don't reinvent the wheel
            </span>
            <span className="text-6xl font-bold text-black dark:text-white">
              Build a starship 🚀
            </span>
          </h2>
        }
      >
        <div className=" flex flex-col md:grid md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] md:gap-8 md:mt-20">
          {cards.map((card, index) => (
            <Card key={index} className="flex flex-col gap-2 py-3">
              <h3 className="text-lg md:text-2xl font-normal md:font-semibold">
                {card.title}
              </h3>
              <p className="text-lg hidden md:flex text-center justify-center">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </ContainerScroll>
      <div className="flex justify-center">
        <Link href="/docs">
          <Button
            size="xl"
            rounded="xl"
            className="w-full max-w-[300px] hidden sm:flex"
          >
            Start creating
          </Button>
        </Link>
      </div>
    </>
  );
};
