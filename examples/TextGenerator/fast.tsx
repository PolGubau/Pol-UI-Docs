const code = `
import { TextGenerator } from "pol-ui";
const words = "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows";
export const TextGeneratorExample = (): JSX.Element => (
  <section className="min-h-[400px] w-full bg-black text-white text-4xl text-center font-bold py-20 flex flex-col justify-center">
    <TextGenerator text={words} delay={0.5} speed={0.1} />
  </section>
);
`;
export default code;
