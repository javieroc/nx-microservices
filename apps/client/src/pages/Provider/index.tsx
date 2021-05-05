import { Redirect } from "react-router";
import { useAuth } from "../../hooks";

function Provider(): JSX.Element {
  const { auth } = useAuth();

  if (auth.user.role !== 'provider') {
    return <Redirect to="/forbidden" />
  }

  return (
    <h1>Provider</h1>
  );
}

export { Provider }
