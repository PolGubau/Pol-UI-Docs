"use client";
import { Loader } from "pol-ui";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-16 mb-8">
      {/* <AnimatedLogo /> */}
      <p className="text-center flex justify-center items-center gap-2">
        <Loader /> Loading...
      </p>
    </div>
  );
}
