import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <header>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Typography
                    variant="h3"
                    noWrap
                    component="div"
                    textAlign="center"
                    marginTop="40px"
                    style={{ color: "white" }}
                >
                    Mari Shop Calculator
                </Typography>
            </AppBar>
        </header>
    );
}

export default Header;