import { createContext, useState } from "react";

const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [showBuyWindow, setShowBuyWindow] = useState(false);
  const [buyUid, setBuyUid] = useState("");

  const openBuyWindow = (uid) => {
    setBuyUid(uid);
    setShowBuyWindow(true);
  };

  const closeBuyWindow = () => {
    setShowBuyWindow(false);
    setBuyUid("");
  };

  return (
    <GeneralContext.Provider
      value={{ showBuyWindow, buyUid, openBuyWindow, closeBuyWindow }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralContext, GeneralContextProvider };
