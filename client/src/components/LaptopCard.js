import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import useStyles from "../styles"

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";



const LaptopCard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Card >
        <CardHeader
          title={props.title}
        //   subheader={props.title}
          titleTypographyProps={{ align: "center", variant:"h6" }}
          //   action={tier.title === 'Pro' ? <StarIcon /> : null}
        //   subheaderTypographyProps={{
        //     align: "center",
        //   }}
          sx={{
          
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardMedia
         
          className={classes.media}
        //    sx={{ pt: '56.25%',}}
              
          image={props.cover}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection:"column",
              justifyContent: "start",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography component="span" variant="span"  color="text.secondary">
               Marka : {props.brand} <br/>
                İşlemci :{props.cpu}<br/>
               Grafik Kartı: {props.gpu}<br/>
                İşletim Sistemi :{props.os}<br/>
              Ram Hafızası : {props.ram_memory} {" "} GB<br/>
            SSD: {props.ssd_memory}{" "} GB<br/>
            
            </Typography>
            <Typography variant="h6" color="text.primary">
            Fiyat : ${props.price}
            </Typography> <br/>
          </Box>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">
            view
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default LaptopCard;
