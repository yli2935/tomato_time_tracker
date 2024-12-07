/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-06 17:09:51
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-06 17:21:23
 * @FilePath: /tomato_time_tracker/providers/AuthProvider.tsx
 */
import React from "react";

export const AuthContext = React.createContext({
    user: {},
    setUser: (user: any) => {}
});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [user, setUser] = React.useState({});
  return (
    <AuthContext.Provider value={{ user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}
