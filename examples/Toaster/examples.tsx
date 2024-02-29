const code = `
import { Toaster, toast, Button } from "pol-ui";
export const ToastComponent = () => {
  return (
    <div className="flex gap-3">
      <Button
        onClick={() => {
          toast({
            title: "This is a toast",
          });
        }}
      >
        Normal Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "This is a toast",
            action: {
              label: "Undo",
              onClick: () => {
                alert("Undo");
              },
            },
          })
        }
      >
        Action Toast
      </Button>
      <Button
        color="success"
        onClick={() =>
          toast({ title: "This is a success toast", type: "success" })
        }
      >
        Success Toast
      </Button>
      <Button
        color="error"
        onClick={() => toast({ title: "This is a error toast", type: "error" })}
      >
        error Toast
      </Button>
      <Button
        color="info"
        onClick={() => toast({ title: "This is a info toast", type: "info" })}
      >
        info Toast
      </Button>
      <Button
        color="warning"
        onClick={() =>
          toast({ title: "This is a warning toast", type: "warning" })
        }
      >
        warning Toast
      </Button>
      <Button
        color="secondary"
        onClick={() =>
          toast({ title: "This toast is loading", type: "loading" })
        }
      >
        Loading Toast
      </Button>
      <Button
        color="secondary"
        onClick={() =>
          toast({
            title: "This toast is loading",
            description: "I am the description of the toast",
          })
        }
      >
        Description Toast
      </Button>
      <Button
        color="secondary"
        onClick={() => toast({ title: "Martian toast", icon: <TbAlien /> })}
      >
        Custom icon <TbAlien />
      </Button>
      <Button
        color="secondary"
        onClick={() =>
          toast({
            title: "I will autoclose in 5 seconds",
            onDismiss: (t) => {
              alert("You dismissed " + t.title);
            },
            onAutoClose: (t) => {
              alert("autoclosed " + t.title);
            },
          })
        }
      >
        Action on close Toast
      </Button>

      <Toaster {...args} />
    </div>
  );
};
`;
export default code;
