const code = `
import { Input, ColorsEnum, Colors } from "pol-ui";
import {TbAt} from "react-icons/tb";

export const InputComponent = () => {
  return(<div className="grid grid-cols-2">
    <div className="flex flex-col gap-4 p-4 bg-secondary-50">
      {Object.keys(ColorsEnum).map(color => (
        <Input key={color} placeholder={color} color={color as Colors} rightComponent={<TbAt />} />
      ))}
    </div>
    <div className="dark flex flex-col gap-4 p-4 rounded-xl bg-secondary-900">
      {Object.keys(ColorsEnum).map(color => (
        <Input key={color} placeholder={color} color={color as Colors} rightComponent={<TbAt />} />
      ))}
    </div>
  </div>)
};
`;
export default code;
