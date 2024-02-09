const code = `
import { Alert } from "pol-ui";
import React from "react";
const AlertComponent = () => {
  return (
     <Alert
      bordered
      color="info"
      icon={TbInfoCircle}
      additionalContent={
        <>
          <div className="mb-4 mt-2 text-sm text-info-700 dark:text-info-800">
            This is the component comming from additionalContent as a prop,
            could be used when you need to present a large text that is better
            be cutted due to the icon.
          </div>
          <div className="flex gap-2">
            <Button color={ColorsEnum.info}>
              <BiCheck className="h-4 w-4" />
              Understood
            </Button>

            <Button color={ColorsEnum.secondary}>Dismiss</Button>
          </div>
        </>
      }
    >
      <h3 className="text-lg font-medium text-cyan-700 dark:text-cyan-800">
        This is a info alert
      </h3>
      This content is the real one, the children.
    </Alert>
  );
};
export default AlertComponent;
`;
export default code;
