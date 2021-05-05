import { Redirect } from "react-router";
import { useAuth } from "../../hooks";

function Consumer(): JSX.Element {
  const { auth } = useAuth();

  if (auth.user.role !== 'consumer') {
    return <Redirect to="/forbidden" />
  }

  return (
    <h1>Consumer</h1>
  );
}

export { Consumer }
