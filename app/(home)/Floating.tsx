"use client";
import { commandAtom } from "app/components/Cmdk/state";
import { Button, DarkThemeToggle, FollowerPointer, IconButton } from "pol-ui";
import React from "react";
import { TbSearch } from "react-icons/tb";
import { useSetRecoilState } from "recoil";

const Floating = () => {
  const setOpen = useSetRecoilState(commandAtom);

  return (
    <div className="flex flex-col gap-4">
      <FollowerPointer
        className="bg-orange-300 h-fit w-fit p-4 rounded-lg shadow-lg"
        content={
          <div className="rounded-full p-2 bg-primary/80 backdrop-blur-sm">
            Crazy, right
          </div>
        }
      >
        <p className="text-lg">Hover me :)</p>
      </FollowerPointer>
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4">
          <IconButton onClick={() => setOpen((prev) => !prev)} label="Search">
            <TbSearch />
          </IconButton>
          <DarkThemeToggle />
        </div>
        <Button>Button</Button>
        <Button loading>Loading</Button>
        <Button outline>Outlined</Button>
      </div>
    </div>
  );
};

export default Floating;
