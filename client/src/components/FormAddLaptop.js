import * as React from "react";

import TextField from "@mui/material/TextField";

import { Container } from "@mui/system";
import { Paper, Typography,Button } from "@mui/material";
import useStyles from "../styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { addLaptop } from "../actions/laptopActions";


import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});




export const FormAddLaptop = () => {

  const dispatch = useDispatch();
  const errorMessage = useSelector((state)=>state.laptops.err)
  const fetched = useSelector((state)=>state.laptops.fetched)
 
  const [laptop, setLaptop] = useState({
    title: "",
    cover: "",
    brand: "",
    cpu: "",
    gpu: "",
    ssd_memory: "",
    ram_memory: "",
    os: "",
    price: "",
  });
  const handleSubmit =(e)=>{
      e.preventDefault()


    dispatch(addLaptop(laptop));
    
  }
  const clear = (e)=>{
    setLaptop({
      title: "",
      cover: "",
      brand: "",
      cpu: "",
      gpu: "",
      ssd_memory: "",
      ram_memory: "",
      os: "",
      price: "",
    })
  }

  
  const classes = useStyles();
  return (
    <Container maxWidth="sm" sx={{ border: "5px solid #757ce8",borderRadius:"10px" ,padding:"20px" }}>
      <Paper sx={{ border: "blue" }}>
        <form onSubmit={handleSubmit}>
          <Typography
            sx={{ marginBottom: "25px", textAlign: "center" }}
            className={classes.formHeader}
            variant="h3"
          >
            {" "}
            Add New Laptop{" "}
          </Typography>

          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.title}
            onChange={(e) => setLaptop({ ...laptop, title: e.target.value })}
            fullWidth
            label="Name"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.cover}
            onChange={(e) => setLaptop({ ...laptop, cover: e.target.value })}
            fullWidth
            label="Cover Url"
          />
          {/* <img width="450px" src={laptop.cover} alt="Laptop Cover Image"/> */}
          
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.brand}
            onChange={(e) => setLaptop({ ...laptop, brand: e.target.value })}
            fullWidth
            label="Brand name"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.cpu}
            onChange={(e) => setLaptop({ ...laptop, cpu: e.target.value })}
            fullWidth
            label="Cpu"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.gpu}
            onChange={(e) => setLaptop({ ...laptop, gpu: e.target.value })}
            fullWidth
            label="Graphic Card"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.ssd_memory}
            onChange={(e) =>
              setLaptop({ ...laptop, ssd_memory: e.target.value })
            }
            fullWidth
            label="SSD Memory"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.ram_memory}
            onChange={(e) =>
              setLaptop({ ...laptop, ram_memory: e.target.value })
            }
            fullWidth
            label="RAM Memory"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.os}
            onChange={(e) => setLaptop({ ...laptop, os: e.target.value })}
            fullWidth
            label="Operating System"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.price}
            onChange={(e) => setLaptop({ ...laptop, price: e.target.value })}
            fullWidth
            label="Price"
          />
          <Button color="primary" type="submit" size="large" variant="contained" fullWidth gutterBottom > Add </Button>
          <Button color="secondary" onClick={clear} size="large" variant="contained" fullWidth> Clear </Button>
        </form>
      </Paper>
      <br/>
   
   
      <hr/>
      
     
    
      { fetched ? <Alert  severity="success">Succesfully Saved..<br/> 
      Redirecting to Laptops ..</Alert>  : !fetched && 
      errorMessage ? <Alert  severity="error">{errorMessage}</Alert>:""}
    




      
    
    </Container>

  )}

export default FormAddLaptop;