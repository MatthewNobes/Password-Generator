import css from "./PasswordGenerator.module.css";
import { generatePassword } from "./generatePassword";
import {
  Button,
  Typography,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../Store/slices/passwordSlices";
import { copyToClipboard } from "../../Utils/copyToClipboard";

const PasswordResult = () => {
  const password = useSelector((state) => state.password.password);

  return (
    <div className={css.Result}>
      <OutlinedInput
        aria-label="Generated password"
        disabled
        value={password}
        placeholder="Password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="Copy password to clipboard"
              onClick={() => {
                copyToClipboard(password);
              }}
              edge="end"
            >
              <ContentCopyIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

const GenerateNewPasswordButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      aria-label="Generate new password"
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
        <GenerateNewPasswordButton />
      </div>
    </div>
  );
};

export default PasswordGenerator;
