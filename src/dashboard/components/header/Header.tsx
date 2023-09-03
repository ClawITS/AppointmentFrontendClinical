import { useState } from 'react';
import { AppBar, Box, Container, Toolbar, Typography, useMediaQuery, Tooltip, Menu, MenuItem } from '@mui/material';
import { Avatar, IconButton } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeToggleButton } from '..';

export const Header = () => {

  const tabletCheck = useMediaQuery("(min-width: 768px)");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  return (
    <AppBar position='static' sx={{ marginBottom: '40px' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant='h6' noWrap component='a' href='/'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            ClawIT
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ClawIT
          </Typography>
          {tabletCheck && (
            <Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
              <Typography>Signed in as </Typography>
            </Box>
          )}

          <ThemeToggleButton />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User menu">
              <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} size="large" edge="end" color="inherit" aria-label="user menu">
                <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              id="user-menu"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
              MenuListProps={{
                'aria-labelledby': 'user-menu',
              }}
            >
              <MenuItem onClick={() => setAnchorElUser(null)}>Profile</MenuItem>
              <MenuItem onClick={() => setAnchorElUser(null)}>My account</MenuItem>
              <MenuItem onClick={() => setAnchorElUser(null)}>Logout</MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
