import { useState, createContext } from "react";

const initialState = {
  name: "",
  mobile: "",
  description: "",
};

const ResultContext = createContext({
  result: initialState,
});

const Provider = ({ children }) => {
  const [result, setResult] = useState(initialState);
  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export { Provider, ResultContext };
