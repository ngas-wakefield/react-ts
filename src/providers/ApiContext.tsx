// src/providers/ApiContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the data and state in the API context
interface ApiContextType {
  data: any;
  error: string | null;
  loading: boolean;
  fetchData: () => void;
}

// Define the type for the props of the ApiProvider, which will include `children`
interface ApiProviderProps {
  children: ReactNode;
}

// Create the API context with a default value of undefined
const ApiContext = createContext<ApiContextType | undefined>(undefined);

// Create the ApiProvider component
export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data from an API
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    // Provide the context value to children components
    <ApiContext.Provider value={{ data, error, loading, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook to use the API context in any component
export const useApi = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
