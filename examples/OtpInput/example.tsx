const code = `
const [step, setStep] = useState<1 | 2 | 3>(1)
  const [otp, setOtp] = useState('')
  useEffect(() => {
    setOtp('')
  }, [step])

  return (
    <>
      {step === 1 && (
        <Card>
          <h1>Step 1</h1>
          <Button
            onClick={() => {
              toast({
                title: 'Your code is 1234',
              })
              setStep(2)
            }}
          >
            Get a code
          </Button>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <h1>Step 2</h1>
          <OtpInput
            value={otp}
            onChange={setOtp}
            onComplete={(code: string) => {
              if (code === '1234') {
                setStep(3)
              } else {
                toast({
                  title: 'Invalid code',
                  type: 'error',
                })
              }
            }}
          />
        </Card>
      )}
      {step === 3 && (
        <Card>
          <h1>Account verfied!</h1>
          <Button onClick={() => setStep(1)}>Reset</Button>
        </Card>
      )}
    </>
  )
};
`;
export default code;
