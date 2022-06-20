import { useContext } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { AlertContext } from "@/context/alertCotex";

export default function TransitionAlerts() {
  const { showSubmitResult, setShowSubmitResult, alertMsgtype, alertMsg } =
    useContext(AlertContext);
  if (showSubmitResult)
    return (
      <Box sx={{ width: "100%" }}>
        <Collapse in={showSubmitResult}>
          <Alert
            severity={alertMsgtype}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowSubmitResult(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ alignItems: "center" }}
          >
            {alertMsg}
          </Alert>
        </Collapse>
      </Box>
    );
  else return null;
}
