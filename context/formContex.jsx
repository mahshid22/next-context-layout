import { useState, createContext } from "react";

const initialState = {
  name: "",
  mobile: "",
  description: "",
};
const FormContext = createContext({
  form: initialState,
});
const FormProvider = ({ children }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <FormContext.Provider
      value={{ form, handleInputChange, loading, setLoading }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
