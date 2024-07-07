import { AppBar, Box, styled, Toolbar, keyframes } from "@mui/material";
import shopLogo from '/shopLogo.svg';
import { NavLink, Link as RouterLink } from "react-router-dom";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    fontWeight: 'bold',
    '&.active': {
        color: theme.palette.primary.contrastText,
    }
}));

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between", padding: '10px' }}>
                <Box display="flex" alignItems="center" sx={{ gap: 5 }}>
                    <Box
                        component="img"
                        src={shopLogo}
                        alt="logo"
                        sx={{
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            animation: `${pulse} 4s infinite`
                        }}
                    />
                    <RouterLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Box sx={{ fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer', '&:hover':'color' }} variant="h6">
                            Sneaker-Shop
                        </Box>
                    </RouterLink>
                </Box>
                <Box sx={{ display: "flex", gap: '50px' }}>
                    <StyledNavLink to="/">Main</StyledNavLink>
                    <StyledNavLink to="/cart">Cart</StyledNavLink>
                    <StyledNavLink to="/contacts">Contacts</StyledNavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;