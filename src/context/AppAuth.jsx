import { useContext } from "react";
import { AppContext } from "./AppContext";

export const AppAuth = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppAuth deve ser usado dentro de um AppContextProvider.");
  }
  return context;
};
