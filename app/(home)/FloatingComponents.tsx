"use client";
import React, { useState } from "react";
import {
  Avatar,
  Banner,
  Breadcrumb,
  BreadcrumbItem,
  BubbleHeading,
  Card,
  CardStack,
  Checkbox,
  ColorsEnum,
  DirectionHover,
  Dropdown,
  DropdownItem,
  Dropzone,
  Input,
  OtpInput,
  toast,
  useBoolean,
} from "pol-ui";
import { TbHandMove, TbHome, TbUser } from "react-icons/tb";
import Floating from "./Floating";

const FloatingComponents = () => {
  const [otpValue, setOtpValue] = useState("12");
  const { value: checked, toggle: setChecked } = useBoolean(false);

  return (
    <section className="w-full hidden md:flex gap-8 justify-center  py-4 overflow-hidden px-20">
      <div className="flex gap-4 flex-col justify-center">
        <div className="flex flex-row gap-10 text-left">
          <div className="hidden md:flex">
            <Input label="Your email" placeholder="Type something..." />
          </div>
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
            <span className="text-2xl font-bold text-secondary-800 gap-2 flex ">
              <TbHandMove /> Drop your files here
            </span>
            <span className="text-lg text-gray-500 dark:text-gray-400">
              or click to browse
            </span>
          </div>
        </Dropzone>
      </div>
      <Floating />
      <CardStack className="hidden xl:flex">
        <Card className="bg-red-300 h-[100px] w-[100px]">1</Card>
        <Card className="bg-green-300 h-[100px] w-[100px]">2</Card>
        <Card className="bg-blue-300 h-[100px] w-[100px]">3</Card>
        <Card className="bg-purple-300 h-[100px] w-[100px]">4</Card>
      </CardStack>
      <div className="hidden 2xl:flex">
        <DirectionHover imageUrl="/hollidays.jpg" childrenClassName="h-[50px] ">
          Your last summer in Tenerife🏄
        </DirectionHover>
      </div>
      <div className="flex-col gap-8 hidden xl:flex">
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
          label="This UI is amazing!"
          color={ColorsEnum.primary}
          checked={checked}
          onChange={() => setChecked()}
        />
        <Breadcrumb>
          <BreadcrumbItem href="https://polgubau.com/" icon={TbHome}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="https://polgubau.com/" icon={TbUser}>
            Profiles
          </BreadcrumbItem>
          <u className="text-secondary-600 ml-2" />
          <Dropdown className="bg-transparent text-secondary-900" label="...">
            <DropdownItem href="https://polgubau.com/" label="Authors" />
            <DropdownItem href="https://polgubau.com/" label="Selected" />
            <DropdownItem href="https://polgubau.com/" label="Matched" />
          </Dropdown>
          <BreadcrumbItem>Pol</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default FloatingComponents;
