const code = `
import { Progress, MainSizesEnum, MainSizes } from "pol-ui";

const ProgressComponent = () => {
  return   <div className="flex gap-4 flex-col">
    {Object.keys(MainSizesEnum).map(v => (
      <Progress progress={45} size={v as MainSizes} label={v} key={v} />
    ))}
  </div>
};
export default ProgressComponent;
`;
export default code;
