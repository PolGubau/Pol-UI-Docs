const code = `
import { PerspectiveCard } from "pol-ui";

const PerspectiveCardComponent = () => {
  return (
    <div className="w-full min-h-screen rounded-3xl border bg-primary-200">
    <PerspectiveCard className="flex gap-2">
      <div className="w-[150px] h-[150px] rounded-3xl bg-primary grid place-items-center">
        Hello there
      </div>
      <div className="w-[150px] h-[150px] rounded-3xl bg-primary grid place-items-center">
        Hello there
      </div>
    </PerspectiveCard>
  </div>
  );
};
export default PerspectiveCardComponent;
`;
export default code;
