"use client";
import { commandAtom } from "app/components/Cmdk/state";
import {
  Button,
  Chip,
  DarkThemeToggle,
  FollowerPointer,
  Hamburguer,
  IconButton,
  toast,
  useBoolean,
} from "pol-ui";
import React from "react";
import { TbSearch, TbTrash } from "react-icons/tb";
import { useSetRecoilState } from "recoil";

const Floating = () => {
  const setOpen = useSetRecoilState(commandAtom);
  const { value, toggle } = useBoolean(false);

  return (
    <div className="flex flex-col gap-4">
      <Chip
        actions={[
          {
            icon: <TbTrash />,
            onClick: () => toast({ title: "Chip", description: "Deleted" }),
          },
        ]}
      >
        Custom Icon
      </Chip>

      <div className="flex gap-4 flex-col">
        <div className="flex gap-4">
          <IconButton onClick={() => setOpen((prev) => !prev)} label="Search">
            <TbSearch />
          </IconButton>
          <DarkThemeToggle />
          <Hamburguer open={value} onClick={toggle} />
        </div>
        <Button>Button</Button>
        <Button loading>Loading</Button>
        <Button outline>Outlined</Button>
      </div>
    </div>
  );
};

export default Floating;
