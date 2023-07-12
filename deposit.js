function Deposit() {
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState(0);
  const { users } = React.useContext(UserContext);
  const currentIndex = React.useContext(UserContext).users.length - 1;
  const presentUser = React.useContext(UserContext).users[currentIndex];
  
  const valid = () => {
    if (deposit < 0) {
      setStatus("Error: Negative amount.");
      setTimeout(() => errorRedo(), 3000);
      return false;
    }
    return true;
  }
  

  const errorRedo = () => {
    setStatus("");
    setWithdraw(prevDeposit => {
      if (prevDeposit !== 0) {
        return 0;
      }
      return prevDeposit;
    });
  };

  function depositHandler() {
    const depositAmount = Number(deposit);
    if (isNaN(depositAmount) || depositAmount <= 0) {
    console.log("Invalid deposit amount.");
    return;
    }
    
    console.log(`Amount to deposit: ${depositAmount}`);
    console.log(`Present user balance before: ${presentUser.balance}`);
    presentUser.balance += depositAmount;
    console.log(`Present user balance after: ${presentUser.balance}`);
    setDeposit(0);
    }
  
  return (
    <Card
      maxWidth="18rem"
      bgcolor="light grey"
      header={"Deposit to " + presentUser.name}
      status={status}
      body={
        <>
          <h4 className="text-dark">Amount {presentUser.balance}$</h4>
          <br />
          <input
            type="number"
            className="form-control"
            id="deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.currentTarget.value)}
          />
          <br />
          <button
            disabled={deposit == 0}
            type="submit"
            className="btn btn-primary"
            onClick={depositHandler}
          >
            Deposit
          </button>
          <br />
        </>
      }
    />
  );
}
