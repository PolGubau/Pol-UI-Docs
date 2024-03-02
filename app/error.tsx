"use client";

import { Button } from "pol-ui";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center flex flex-col justify-center">
      <p>🫥 Oh no, something went wrong... maybe refresh?</p>
      <Button onClick={() => reset()} className="w-fit">
        Refresh
      </Button>
    </div>
  );
}
