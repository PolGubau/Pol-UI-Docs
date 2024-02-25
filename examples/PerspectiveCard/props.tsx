const code = `
import { PerspectiveCard } from "pol-ui";

const PerspectiveCardComponent = () => {
  return (
    <div className="w-full min-h-screen rounded-3xl border bg-primary-200">
      <PerspectiveCard
        onClick={() => alert("clicked")}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3,
            type: "spring",
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.1,
            type: "spring",
          },
        }}
      >
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
