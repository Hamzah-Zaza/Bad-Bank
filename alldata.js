function AllData() {
  return (
    <Card
      header={"Bank Account"}
      body={
        <>
          <DataTable />
        </>
      }
    />
  );
}

const DataTable = () => {
  const { users } = React.useContext(UserContext);

  return (
    <Card
      maxWidth="100%"
      bgcolor="light grey"
      header="Data"
      body={
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>${user.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  );
}
