import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sidharth",
    email: "email@gmail.com",
  },
});

export default UserContext;
