const code = `
import { Popover } from "pol-ui";

const PopoverComponent = () => {
  return (
    <Popover>
      <div className="flex flex-col items-center rounded-2xl">
        <Avatar
          size="lg"
          img={"https://avatars.githubusercontent.com/u/63197171?v=4"}
        />
        <h2 className="text-lg font-bold mt-2">Pol Gubau Amores</h2>
        <p className="text-sm text-secondary-500">
          Software Engineer at <b>Pol-ui</b>
        </p>

        <div className="mt-4 flex items-center">
          <Button color="secondary">View Profile</Button>
          <Button color="primary" className="ml-2">
            Follow
          </Button>
        </div>
      </div>{" "}
    </Popover>
  );
};
export default PopoverComponent;
`;
export default code;
