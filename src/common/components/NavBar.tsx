import AccountCircle from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CodeResponse, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authentication/contexts/AuthContext';
import { useGoogleCalendarActivationMutation, useLogoutMutation } from '../../generated/graphql';
import theme from '../../theme';
import LogoIcon from '../assets/LogoIcon';
import Iconify from './Iconify';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const { user, dispatch } = useContext(AuthContext);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('common');
  const [activateGoogleCalendar] = useGoogleCalendarActivationMutation();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleGoogleCalendarActivation = (response: Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>) => {
    activateGoogleCalendar({ variables: { googleCalendarActivationInput: { activationCode: response.code } } });
    // hasGrantedAllScopesGoogle(response, 'https://www.googleapis.com/auth/cloud-platform.read-only')
  };

  const requestGoogleCalendarAccess = useGoogleLogin({
    scope: 'https://www.googleapis.com/auth/calendar.events.readonly',
    flow: 'auth-code',
    hint: user?.email,
    onSuccess: handleGoogleCalendarActivation,
  });

  const handleGoogleCalendarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      requestGoogleCalendarAccess();
    }
  };

  const handleDashboardNavigation = () => {
    navigate('/dashboard');
  };

  const logoutUser = async () => {
    await logout();
    googleLogout();
    navigate('/login');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      {/* <MenuItem onClick={handleMenuClose}>
        <IconButton size="small" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
          {user && user.avatar ? <Avatar alt={user.username} sx={{ width: 28, height: 28 }} src={user.avatar} /> : <AccountCircle />}
        </IconButton>
        <Typography>{t('menu.profile', { ns: 'common' })}</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton size="small" aria-label="settings" color="inherit">
          <SettingsIcon />
        </IconButton>
        <Typography>{t('menu.settings', { ns: 'common' })}</Typography>
      </MenuItem> */}
      <MenuItem component={Link} to="/" onClick={logoutUser}>
        <IconButton size="small" aria-label="logout" color="inherit" onClick={logoutUser}>
          <LogoutIcon />
        </IconButton>
        <Typography>{t('menu.logout', { ns: 'common' })}</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
          {user && user.avatar ? <Avatar alt={user.username} sx={{ width: 28, height: 28 }} src={user.avatar} /> : <AccountCircle />}
        </IconButton>
        <Typography>{t('menu.profile', { ns: 'common' })}</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="settings" color="inherit">
          <SettingsIcon />
        </IconButton>
        <Typography>{t('menu.settings', { ns: 'common' })}</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="logout" color="inherit" onClick={logoutUser}>
          <LogoutIcon />
        </IconButton>
        <Typography>{t('menu.logout', { ns: 'common' })}</Typography>
      </MenuItem>
    </Menu>
  );
  const drawerWidth = 240;

  // fontFamily: 'Almarai, sans-serif'
  // fontFamily: 'Archivo, sans-serif'
  // fontFamily: 'Space Grotesk, sans-serif'

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton onClick={handleDrawerToggle} size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <LogoIcon width={40} height={40} viewBox="0, 0, 400,400" />
            <Typography noWrap component="div" sx={{ ml: 2, fontSize: '1.35rem', fontFamily: 'Archivo, sans-serif' }}>
              Observatory
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Typography>{user && user.username}</Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              {user && user.avatar ? <Avatar alt={user.username} sx={{ width: 30, height: 30 }} src={user.avatar} /> : <AccountCircle />}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDashboardNavigation} selected={location.pathname === '/dashboard'}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={t('pages.dashboard', { ns: 'common' })} sx={{ fontWeight: theme.typography.fontWeightBold }} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListSubheader>{t('services.services', { ns: 'common' })}</ListSubheader>
            <ListItem disablePadding>
              <ListItemButton sx={{ marginTop: '0.5rem' }}>
                <Iconify icon="logos:google-calendar" height={16} />
                <ListItemText primary={t('services.googleCalendar', { ns: 'common' })} sx={{ mx: '0.5rem', fontWeight: theme.typography.fontWeightBold }} />
                <Switch defaultChecked onChange={handleGoogleCalendarChange} edge="end" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default NavBar;
