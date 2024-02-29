const code = `
import { Rating } from "pol-ui";

export const RatingComponent = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Rating stars={2} filled={1} />
      <Rating stars={2} filled={3} />
      <Rating stars={10} filled={3} />
      <Rating stars={10} filled={5} />
      <Rating stars={10} filled={10} />
    </div>
  );
};
`;
export default code;
