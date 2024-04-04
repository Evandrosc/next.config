import { createContext, useState, useEffect } from "react";

const userContext = createContext({
  user: {},
  setUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    age: 0,
    height: 0,
    weight: 0,
    desiredWeight: 0,
    name: "",
    activity: 0,
    objective: "", // weightLoss | weightGain | idealWeight
  });

  useEffect(() => {
    const _u = localStorage.getItem("_u");

    if (_u) setUser(JSON.parse(_u));
  }, []);

  useEffect(() => {
    const stringified = JSON.stringify(user);

    if (
      stringified !==
      `{"age":0,"height":0,"weight":0,"desiredWeight":0,"name":"","activity":0,"objective":""}`
    )
      localStorage.setItem("_u", JSON.stringify(user));
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserContextProvider };
