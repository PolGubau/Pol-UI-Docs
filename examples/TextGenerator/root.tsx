const code = `
import { TextGenerator } from "pol-ui";
export const TextGeneratorExample = (): JSX.Element => (
  <section className="min-h-[400px] w-full bg-black text-white text-4xl text-center font-bold py-20 flex flex-col justify-center">
    <TextGenerator
      text="Pol-ui, powering UI
      "
      delay={0.5}
      speed={1.5}
    />
  </section>
);
`;
export default code;
