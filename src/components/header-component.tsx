import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <header>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Typography
                    variant="h3"
                    textAlign="center"
                    marginTop="40px"
                    marginBottom="40px"
                    color="white"
                >
                    Mari Shop Calculator
                </Typography>
            </AppBar>
        </header>
    );
}

export default Header;