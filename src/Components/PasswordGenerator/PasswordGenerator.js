import css from './PasswordGenerator.module.css';
import { generatePassword } from './generatePassword';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

const PasswordResult = (props) => {
    const password = generatePassword(12);

    return (
        <div className={css.Result}>
            <Typography variant='body1'>
                {password}
            </Typography>
        </div>
    )
}

const PasswordGenerator = () => {
    const [sessionID, updateSessionID] = useState(0);
    
    return (
        <div className={css.PasswordGenerator}>
            <Typography variant="h2" component="h2">
                Recommended Password
            </Typography>
            <PasswordResult session={sessionID}/>
            <Button 
                variant="outlined" 
                onClick={() => {
                    updateSessionID(sessionID + 1);
                }}
                startIcon={<RefreshIcon />}
            >
                Generate New Password
            </Button>
        </div>
    )
}

export default PasswordGenerator;