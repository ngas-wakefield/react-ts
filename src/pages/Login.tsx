import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="login-page">
      <h2>Login</h2>
      <button onClick={login}>Login with Auth0</button>
    </div>
  );
};

export default Login;
