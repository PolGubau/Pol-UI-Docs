"use client";
import React, { useState } from "react";
import {
  Avatar,
  Banner,
  BubbleHeading,
  Checkbox,
  ColorsEnum,
  DirectionHover,
  Dropzone,
  Input,
  OtpInput,
  PerspectiveCard,
  Switch,
  toast,
  useBoolean,
} from "pol-ui";
import { TbHandMove } from "react-icons/tb";
import Floating from "./Floating";

const FloatingComponents = () => {
  const [otpValue, setOtpValue] = useState("");
  const { value, toggle } = useBoolean(false);
  const { value: checked, toggle: setChecked } = useBoolean(false);

  return (
    <section className="w-full flex gap-8 ">
      {" "}
      <div className="flex gap-4 flex-col">
        <div className="flex flex-row gap-10 text-left">
          <Input label="Your email" placeholder="Type something..." />
          <OtpInput
            value={otpValue}
            onChange={setOtpValue}
            onComplete={(value) => {
              toast({
                title: "OTP Completed",
                description: `You've entered the OTP: ${value}`,
              });
            }}
          />
        </div>
        <Dropzone>
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <span className="text-2xl font-bold text-black dark:text-white gap-2 flex ">
              <TbHandMove /> Drop your files here
            </span>
            <span className="text-lg text-gray-500 dark:text-gray-400">
              or click to browse
            </span>
          </div>
        </Dropzone>
      </div>
      <div className="flex ">
        <Floating />
      </div>
      <div className="flex gap-2 aspect-square p-8">
        <PerspectiveCard>
          <div className="w-[150px] h-[150px] rounded-3xl bg-primary grid place-items-center">
            Hello there
            <Switch checked={value} onChange={toggle} />
          </div>
        </PerspectiveCard>
      </div>
      <div className="">
        <DirectionHover imageUrl="/hollidays.jpg" childrenClassName="h-[50px] ">
          Your last summer in Tenerife🏄
        </DirectionHover>
      </div>
      <div className="flex flex-col gap-8">
        <Banner>
          <span>Welcome back to Pol-ui</span>
        </Banner>
        <BubbleHeading>Hover me :)</BubbleHeading>
        <Avatar.Group>
          <Avatar
            img="https://avatars.githubusercontent.com/u/138794672?s=50&v=4"
            stacked
          />
          <Avatar
            img="https://avatars.githubusercontent.com/u/104431726?s=50&v=4"
            stacked
          />
          <Avatar
            img="https://avatars.githubusercontent.com/u/94074414?s=80&s=50&v=4"
            stacked
          />
          <Avatar
            img="https://avatars.githubusercontent.com/u/78301921?s=80&s=50&v=4"
            stacked
          />
          <Avatar.Counter total={99} />
        </Avatar.Group>
        <Checkbox
          label="That UI is amazing!"
          color={ColorsEnum.primary}
          checked={checked}
          onChange={() => setChecked()}
        />
      </div>
    </section>
  );
};

export default FloatingComponents;
