import { useState } from "react";
import "./App.css";

import { AuthPage } from "./screen/AuthPage";
import { ChatsPage } from "./screen/ChatsPage";
export const App = () => {
  const [user, setUser] = useState(undefined);

  if(!user)
  {
    return <AuthPage onAuth={(user)=> setUser(user)} />
  }
  else{
    return <ChatsPage user={user} />
  }
}

export default App;
