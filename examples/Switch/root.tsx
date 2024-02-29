const code = `
import { Switch, useBoolean } from "pol-ui";

export const SwitchComponent = (): JSX.Element => {
  const { value, toggle } = useBoolean(false);
  return <Switch checked={value} onChange={toggle} />;
};
`;
export default code;
