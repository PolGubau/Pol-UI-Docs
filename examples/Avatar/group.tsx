const code = `
import { Avatar, MainSizes, MainSizesEnum } from "pol-ui";
import React from "react";
const AvatarComponent = () => {
  return (
   <Avatar.Group {...args}>
    <Avatar img="https://avatars.githubusercontent.com/u/104431726?v=4" stacked />
    <Avatar img="https://avatars.githubusercontent.com/u/104431726?v=4" stacked />
    <Avatar img="https://avatars.githubusercontent.com/u/94074414?s=80&v=4" stacked />
    <Avatar img="https://avatars.githubusercontent.com/u/78301921?s=80&v=4" stacked />
    <Avatar.Counter total={99} href="#" />
  </Avatar.Group>
    ))}
  </div>
  );
};
export default AvatarComponent;
`;
export default code;
