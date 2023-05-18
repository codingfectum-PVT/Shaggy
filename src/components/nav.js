import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import styled from "@emotion/styled";

const drawerWidth = 240;
const navItems = [  {
  title: 'Home',
  link: '#Home'
},
{
  title: 'About',
  link: '#About'
},
{
  title: 'Tokenomics',
  link: '#Tokenomics'
},
{
  title: 'How To Buy',
  link: '#HowToBuy'
},
{
  title: 'Farming',
  link: '/farm'
}
];

const MenuLinks = styled(Button)`
  Color: #fff;
  font-size:18px;
  font-family:Poppins;
  font-weight:400;
  margin:0px 0px 0px 20px;
  background:#ffffff36;
  border-radius:10px;
  text-transform:none;
@media(max-width: 1200px) and (min-width: 601px){
  margin:0px 0px 0px 15px;
}
@media(min-width: 2000px){
  font-size:40px;
}
@media (max-width: 900px) and (min-width: 749px){
  font-size: 14px;
}

`
const MobileMenu = styled(ListItemText)`
span {
  color:#fff;
  font-size:18px;
  font-family:Myriad Pro semibold;
  font-weight:600;
}
`

const NavBar = styled(AppBar)`
  position:absolute;
  background:transparent;
  padding-top: 15px;
  padding-left: 15px;
  top:unset;
  box-shadow:none;
@media (max-width: 749px){
  padding-top:10px;
}
`
const MenuToggle = styled(IconButton)`
.css-vubbuv{
  Color: #fff;
  width:3rem;
  height:3rem;
}
`
const MobileSocial = styled(Grid)`
  display: inline-flex;
`
const SocialImg = styled.img`
  width:80%;
`
const DesktopMenuWrapper = styled(Grid)`
  justify-content: space-between;
`
const LogoText = styled.h1`
  font-size:30px;
  font-family:JAFAROWN;
  background:#ffffff36;
  margin: 0px;
  border-radius: 10px;
  color: #fff;
  @media (min-width: 2000px){
    font-size: 60px;
  }
`
const MobileLogoText = styled.h1`
  font-size:30px;
  font-family:JAFAROWN;
  background:#ffffff36;
  margin: 0px;
  border-radius: 10px;
  color: #fff;
`
const LogoLink = styled.a`
text-decoration:none;
`
const SocialImgLink = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    background: #ffffff36;
    border-radius: 10px;
    margin-left:20px;
    width:60px;
@media (max-width: 600px){
    width:30px;
    margin-left:5px;
    margin-right:5px;
}
@media(max-width: 1200px) and (min-width: 601px){
  margin:0px 0px 0px 15px;
}
a{
  padding-top:5px;
}
`

function DrawerAppBar(props) {
  const { window, parrentMenuTheme } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <MobileLogoText>SHAGGY</MobileLogoText>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton href={item.link} sx={{ textAlign: 'center' }}>
              <MobileMenu primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <MobileSocial item xs={12}>
            <SocialImgLink>
              <a href="https://t.me/shaggyfinance">
                  <SocialImg src="./Icon awesome-telegram-plane.png" />
              </a>
              </SocialImgLink>
              <SocialImgLink>
              <a href="https://twitter.com/shaggyfinance">
                  <SocialImg src="./Icon awesome-twitter.png" />
              </a> 
              </SocialImgLink>
            </MobileSocial> 
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar component="nav" style={{position:'fixed'}}>
        <Toolbar>
          <Grid item sm={12} xs={12} sx={{ mr: 2, display: { sm: 'none' , xs: 'flex' } , justifyContent: 'space-between' }}>
            <LogoLink href="/">
              <LogoText>SHAGGY</LogoText>
            </LogoLink>
          <MenuToggle
            menutheme={parrentMenuTheme}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            
          >
            <MenuIcon />
          </MenuToggle>
          </Grid>
          <DesktopMenuWrapper item xs={12} sx={{ display: { xs: 'none', sm: 'flex' }  }}>
            
          <LogoLink href="/">
            <LogoText>SHAGGY</LogoText>
            </LogoLink>
          <Box sx={{display: 'flex'}}>
            {navItems.map((item) => (
              <MenuLinks key={item.title} href={item.link} >
              {item.title}
              </MenuLinks>
            ))}
            <SocialImgLink>
              <a href="https://t.me/shaggyfinance">
                  <SocialImg src="./Icon awesome-telegram-plane.png" />
              </a>
              </SocialImgLink>
              <SocialImgLink>
              <a href="https://twitter.com/shaggyfinance">
                  <SocialImg src="./Icon awesome-twitter.png" />
              </a> 
              </SocialImgLink>
          </Box>
          </DesktopMenuWrapper>
        </Toolbar>
      </NavBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Grid>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;