import { useState, createContext } from "react";
const AlertContext = createContext({});
const AlertProvider = ({ children }) => {
  const [showSubmitResult, setShowSubmitResult] = useState(false);
  const [alertMsgtype, setAlertMsgType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  return (
    <AlertContext.Provider
      value={{
        showSubmitResult,
        setShowSubmitResult,
        alertMsgtype,
        setAlertMsgType,
        alertMsg,
        setAlertMsg,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider, AlertContext };
