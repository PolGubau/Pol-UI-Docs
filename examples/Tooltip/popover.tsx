const code = `
import { Tooltip, Input, Button } from "pol-ui";
export const TooltipComponent = () => {
  return (
    <Tooltip
      content={
        <div className="flex flex-col gap-2 items-center p-2">
          <h2 className="text-white">Your Profile</h2>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Button type="submit">Send</Button>
        </div>
      }
      trigger="click"
    >
      <Button>Open form</Button>
    </Tooltip>
  );
};
`;
export default code;
