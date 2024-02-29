const code = `
import { Toaster, toast, Button } from "pol-ui";
export const ToastComponent = () => {
  const createToast = () => {
    toast({
      title: "This is a toast",
      duration: 500000,
      action: {
        label: "Undo",
        onClick: () => {
          alert("Undo");
        },
      },
    });
  };
  return (
    <div className="flex flex-col gap-3">
      <p>Click the button to show a toast</p>
      <Button onClick={createToast}>Show toaster</Button>
      <Toaster {...args} />
    </div>
  );
};
  `;
export default code;
