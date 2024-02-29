const code = `
import { Radio, theme } from "pol-ui";

export const AllColors = (): JSX.Element => {
  const options = ['1', '2', '3']
  return (
    <ul className="flex gap-4">
      {Object.keys(theme.radio.color).map(color => {
        return (
          <ul className="flex gap-2 flex-col" key={color}>
            {options.map(option => {
              return (
                <Radio
                  name={color}
                  key={option}
                  value={option}
                  label={color + option}
                  color={color as Colors}
                  defaultChecked={option === options[1]}
                />
              )
            })}
          </ul>
        )
      })}
    </ul>
  )
}
`;
export default code;
