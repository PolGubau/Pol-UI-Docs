const code = `
import { Loader, MainSizes,MainSizesEnum } from "pol-ui";
const LoaderComponent = () => {
  return   ( <div className="flex flex-row gap-3">
    {Object.keys(MainSizesEnum).map(v => (
      <Loader size={v as MainSizes}   key={v}  />
    ))}
  </div>)
};
export default LoaderComponent;
`;
export default code;
