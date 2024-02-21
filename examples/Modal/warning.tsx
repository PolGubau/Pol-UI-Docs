const code = `
import { Modal, Button, useBoolean } from "pol-ui";
const ModalComponent = () => {
  const [show, setShow] = React.useState(false);
  const { value, setTrue, setFalse } = useBoolean(false);

  return (
    <>
      <div className="flex">
        <Button onClick={setTrue}>Open modal</Button>
      </div>
      <Modal
        onClose={() => {
          setFalse()
        }}
        show={value}
      >
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="error"
              onClick={() => {
                setFalse()
              }}
            >
              Yes, I&apos;m sure
            </Button>
            <Button
              color="secondary"
              onClick={() => {
                setFalse()
              }}
            >
              No, cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
};
export default ModalComponent;
`;
export default code;
