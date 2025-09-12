import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from './../../pages/cart/Cart';
import Login from './../../pages/login/Login';
import Register from './../../pages/register/Register';
import { Link } from '@mui/material';
import { Link as RouterLink} from "react-router-dom";
import Home from './../../pages/home/Home';



export default function Navbar(){
  return(
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{gap:3}}>

        <Link component={RouterLink} to={'/'} color='inherit' underline='none'>home</Link>
        <Link component={RouterLink} to={'/cart'} color='inherit' underline='none'>cart</Link>
        <Link component={RouterLink} to={'/login'} color='inherit' underline='none'>login</Link>
        <Link component={RouterLink} to={'/register'} color='inherit' underline='none'>register</Link>

      
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}