import React from "react";
import MainApp from "./components/MainApp";

export const MessageContext = React.createContext();


function App() {
  return (
      <MainApp/>
  );
}
export default App;