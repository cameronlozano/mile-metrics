import { createContext, useContext } from 'react';

const LoginContext = createContext(null);

const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error(
      'useLoginContext must be used inside LoginContext.Provider',
    );
  }

  return context;
};

export { LoginContext, useLoginContext };
