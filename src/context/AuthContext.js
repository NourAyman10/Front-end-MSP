import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.clear();
    return;
  };

  const authLogin = async (email, password) => {
    let item = { email, password };
    try {
      let result = await fetch(process.env.REACT_APP_AUTH_ADMIN_DOMAIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      setUser(result);
    } catch (error) {
        console.log(error);
        return error;
    }
  };

  return (
    <AuthContext.Provider value={{ authLogin, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
