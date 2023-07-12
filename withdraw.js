function Withdraw() {
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState(0);
  const { users } = React.useContext(UserContext);
  const userIndex = users.length - 1;
  const User = users[userIndex];

  const valid = () => {
    const isNegativeAmount = withdraw < 0;
    const isInsufficientFunds = withdraw > User.balance;
  
    if (isNegativeAmount) {
      setStatus("Error: Negative Amount.");
      setTimeout(() => errorRedo(), 3000);
    } else if (isInsufficientFunds) {
      setStatus("Error: Insufficient funds.");
      setTimeout(() => errorRedo(), 3000);
    } else {
      return true;
    }
  
    return false;
  }

  const errorRedo = () => {
    setStatus("");
    setWithdraw(prevWithdraw => {
      if (prevWithdraw !== 0) {
        return 0;
      }
      return prevWithdraw;
    });
  };

  
  const withdrawHandler = () => {
    console.log(`Amount to withdraw: ${withdraw}`);
  
    if (valid()) {
      const priorBalance = User.balance;
      User.balance -= Number(withdraw);
      console.log(`Prior Balance: ${priorBalance}\nPost Balance: ${User.balance}`);
      setWithdraw(0);
    }
  };

  return (
    <Card
      maxWidth="18rem"
      bgcolor="light grey"
      header={"Withdraw from " + User.name}
      status={status}
      body={
        <>
          <h4 className="text-dark">Amount {User.balance}$</h4>
          <br />
          <input
            type="number"
            className="form-control"
            id="withdraw"
            value={withdraw}
            onChange={(e) => setWithdraw(e.currentTarget.value)}
          />
          <br />
          <button
            disabled={withdraw == 0}
            type="submit"
            className="btn btn-primary"
            onClick={withdrawHandler}
          >
            Withdraw 
          </button>
          <br />
        </>
      }
    />
  );
}
