import css from "./PasswordGenerator.module.css";
import { generatePassword } from "./generatePassword";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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

const CopyToClipboard = () => {
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

const PasswordGenerator = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.PasswordGenerator}>
      <Typography variant="h2" component="h2">
        Recommended Password
      </Typography>
      <PasswordResult />
      <CopyToClipboard />
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(setPassword(generatePassword(12)));
        }}
        startIcon={<RefreshIcon />}
      >
        Generate New Password
      </Button>
    </div>
  );
};

export default PasswordGenerator;
