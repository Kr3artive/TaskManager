import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [occupation, setOccupation] = useState("")
  return (
    <UserContext.Provider value={{ name, setName, email, setEmail, occupation, setOccupation }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
