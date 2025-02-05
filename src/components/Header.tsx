import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { isAuthenticated, logout, login, user } = useAuth();

  return (
    <header className="header">
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
        {!isAuthenticated ? (
          <button onClick={login}>Login</button>
        ) : (
          <>
            <span>Welcome, {user?.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
