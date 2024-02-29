const code = `
import { Textarea } from "pol-ui";
export const TextareaExample = (): JSX.Element => (
  <Textarea
    className="min-h-[300px]"
    label="You can resize me :)"
    innerClassName="resize"
  >
    Text
  </Textarea>
);
`;
export default code;
