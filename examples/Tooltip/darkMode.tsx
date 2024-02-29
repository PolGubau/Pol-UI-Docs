const code = `
import { Tooltip, Button } from "pol-ui";
export const TooltipComponent = () => {
  return (
    <div className=" grid grid-cols-2 border border-secondary rounded-2xl overflow-hidden">
    <div className="flex p-8 ">
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Default tooltip</Button>
      </Tooltip>
    </div>
    <div className="flex p-8 bg-secondary-900 dark">
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Default tooltip</Button>
      </Tooltip>
    </div>
  </div>
  );
};
`;
export default code;
