import * as React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";




import { useSelector } from "react-redux";
import FormAddLaptop from "../FormAddLaptop";
import { useNavigate } from "react-router-dom";


const AddLaptopPage = () => {
 

  const fetched = useSelector((state)=>state.laptops.fetched)

  const navigate = useNavigate();

console.log("fetched"+fetched)
 if(fetched){
   setTimeout(() => {
    
     navigate("/laptops")

   }, 3000);
 }

  return (
    <div>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      AddLaptopPage
      <FormAddLaptop />
     
      

     
    </div>
  );
};

export default AddLaptopPage;
