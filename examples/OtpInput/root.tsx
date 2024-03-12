const code = `
import { OtpInput, toast } from "pol-ui";
export const OtpInputComponent = () => {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      onComplete={(code: string) => {
        toast({
          title: "You typed "+code,
        });
      }}
    />
  );
};
`;
export default code;
