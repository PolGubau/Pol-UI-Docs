const code = `
import { Popover, useBoolean } from "pol-ui";

const PopoverComponent = () => {
  const { value, toggle } = useBoolean(false);

  return (
    <>
      Open state is {value.toString()}
      <Popover open={value} onOpenChange={toggle}>
        <ExampleContent />
      </Popover>
    </>
  );
};
export default PopoverComponent;
`;
export default code;
