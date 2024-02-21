const code = `
import { Loader } from "pol-ui";
const LoaderComponent = () => {
  return (
    <div className="flex w-1/3 flex-col gap-3 p-6">
      <div className="text-left">
        <Loader aria-label="Left-aligned loader example rotate-360" />
      </div>
      <div className="text-center">
        <Loader aria-label="Center-aligned loader example" />
      </div>
      <div className="text-right">
        <Loader aria-label="Right-aligned loader example" />
      </div>
    </div>
  );
};
export default LoaderComponent;
`;
export default code;
