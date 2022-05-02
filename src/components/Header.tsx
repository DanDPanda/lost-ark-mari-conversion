import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <header>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Typography
                    variant="h1"
                    noWrap
                    component="div"
                    textAlign="center"
                    marginTop="20px"
                    marginBottom="20px"
                >
                    Should you use Rateup?
                </Typography>
            </AppBar>
        </header>
    );
}

export default Header;