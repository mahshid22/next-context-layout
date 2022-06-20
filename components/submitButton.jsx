import { useContext } from "react";
import Button from "@mui/material/Button";
import { FormContext } from "@/context/formContex";
import { ResultContext } from "@/context/resultContext";
const SubmitButton = (props) => {
  const { handleSubmit } = props;
  const formContext = useContext(FormContext);
  const { form, loading, setLoading } = formContext;
  const { result } = useContext(ResultContext);

  return (
    <Button
      variant="contained"
      onClick={() => handleSubmit(form, result)}
      disabled={loading}
    >
      Submit
    </Button>
  );
};
export default SubmitButton;
