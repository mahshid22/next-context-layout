import { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { FormContext } from "@/context/formContex";
const InputText = (props) => {
  const { name, type = "text" } = props;
  const formContext = useContext(FormContext);
  const { form, handleInputChange } = formContext;
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputProps={{
        autoComplete: "none",
      }}
      name={name}
      value={form[name]}
      onChange={handleInputChange}
      type={type}
      {...props}
    />
  );
};
export default InputText;
