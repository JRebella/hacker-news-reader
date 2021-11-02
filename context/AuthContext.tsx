import React, { useState, useEffect, createContext, ReactChild } from "react";

type UserDetails = {
  username: string;
};

interface AuthContext {
  isLoading: boolean;
  isLoggedIn: boolean;
  userDetails: UserDetails | null;
}

const AuthContext = createContext<AuthContext>({
  isLoading: true,
  isLoggedIn: false,
  userDetails: null,
});

const AuthProvider = ({ children }: { children: ReactChild }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    if (!isLoading) return;

    // Validate cookies / ask for log in

    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      setUserDetails({
        username: "Test@test.com",
      });
    }, 1000);
  }, [isLoading]);

  if (!isLoading && !isLoggedIn) {
    return <div>Please log in</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        userDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer, AuthContext };
