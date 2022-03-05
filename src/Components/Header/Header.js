import css from './Header.module.css'
import { Typography } from '@mui/material';

const Header = () => (
    <header className={css.Header}>
        <Typography variant="h1" component="h1">
                Password Generator
        </Typography>
    </header>
)

export default Header;