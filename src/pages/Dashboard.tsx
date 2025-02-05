// src/components/Dashboard.tsx

import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useApi } from '../providers/ApiContext'; // Import useApi hook

const Dashboard: React.FC = () => {
  const { data, error, loading, fetchData } = useApi(); // Access API context
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0(); // Access Auth0 context

  useEffect(() => {
    if (isAuthenticated) {
      fetchData(); // Fetch API data after user is authenticated
    }
  }, [isAuthenticated, fetchData]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Welcome {user?.name}</h1>
          <div>
            <h2>Fetched Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}
    </div>
  );
};

export default Dashboard;
