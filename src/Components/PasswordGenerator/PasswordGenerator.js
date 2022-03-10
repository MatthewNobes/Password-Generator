import css from "./PasswordGenerator.module.css";
import { generatePassword } from "./generatePassword";
import { Button, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../Store/slices/passwordSlices";
import { copyToClipboard } from "../../Utils/copyToClipboard";

const PasswordResult = (props) => {
  const password = useSelector((state) => state.password.password);

  return (
    <div className={css.Result}>
      <Typography variant="body1">{password}</Typography>
    </div>
  );
};

const CopyToClipboardButton = () => {
  const password = useSelector((state) => state.password.password);

  return (
    <Button
      variant="outlined"
      onClick={() => {
        copyToClipboard(password);
      }}
      startIcon={<ContentCopyIcon />}
    >
      Copy to clipboard
    </Button>
  );
};

const GenerateNewPasswordButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      variant="outlined"
      onClick={() => {
        dispatch(setPassword(generatePassword(12)));
      }}
      startIcon={<RefreshIcon />}
    >
      Generate New Password
    </Button>
  );
};

const PasswordGenerator = () => {
  return (
    <div className={css.PasswordGenerator}>
      <Typography variant="h2" component="h2">
        Recommended Password
      </Typography>
      <PasswordResult />
      <div className={css.OptionsForm}>
        <CopyToClipboardButton />
        <GenerateNewPasswordButton />
      </div>
    </div>
  );
};

export default PasswordGenerator;
