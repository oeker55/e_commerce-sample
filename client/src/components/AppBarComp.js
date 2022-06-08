import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const AppBarComp = () => {
  return (
    <div>
       
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Eker Elektronik
          </Typography>
          <nav>
          <Link
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home Page
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/laptops"
              sx={{ my: 1, mx: 1.5 }}
            >
              All Laptops
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/laptops/addNewLaptop"
              sx={{ my: 1, mx: 1.5 }}
            >
              Add New Laptop
            </Link>
            <Link 
              variant="button"
              color="text.primary"
              href="/laptops/others"
              sx={{ my: 1, mx: 1.5 }}
            >
              Others
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarComp