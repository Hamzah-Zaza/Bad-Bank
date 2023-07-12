function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    let isValid = true;
    if (!field) {
      setStatus('Error: ' + label);
      isValid = false;
    } else if (label == "password" && field.length < 8 || field.length >= 24) {
      setStatus("Password must be between 8 and 24 characters.");
      isValid = false;
    } 
    if (!isValid) setTimeout(() => setStatus(""), 3000);
    return isValid;
  }

  function handleCreate() {
    console.log(name,email,password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      maxWidth="18rem"
      bgcolor="light grey"
      header="Create Account"
      status={status}
      body={show ? (
          <>
            <h9 style={{ color: 'black' }} >Name</h9>
            <br/>
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br/>
            <h9 style={{ color: 'black' }} >Email address </h9>
            <br/>
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br/>
            <h9 style={{ color: 'black' }} >password </h9>
            <br/>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br/>
            <button
              disabled={!name && !email && !password}
              type="submit"
              className="btn btn-primary"
              onClick={handleCreate}
            >
            <h9 style={{ color: 'white' }} > Create Account </h9>
            </button>
            <br />
          </>
        ) : (
          <>
            <h5 className="text-dark">Success</h5>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
