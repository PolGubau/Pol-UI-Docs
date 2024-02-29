const code = `
import { Switch, useBoolean, ColorsEnum } from "pol-ui";
 export const AllColors = (): JSX.Element => (
  const { value, toggle } = useBoolean(false);

  <div className="flex flex-wrap gap-6">
    {Object.keys(ColorsEnum).map(v => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Switch checked={value} onChange={toggle} color={v as Colors} label={v} />
      </div>
    ))}
    <div className="flex flex-wrap gap-6 dark pt-10">
      Dark Mode
      <div className="bg-secondary-900 text-secondary-50 flex gap-2 flex-wrap p-4">
        {Object.keys(ColorsEnum).map(v => (
          <div key={v} className="flex flex-col items-center justify-center">
            <Switch checked={value} onChange={toggle} color={v as Colors} label={v} />
          </div>
        ))}
      </div>
    </div>
  </div>
)
`;
export default code;
