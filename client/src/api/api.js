import axios from "axios";


export const API_URL = "http://localhost:5000/laptops"

export const getLaptops =()=>axios.get(API_URL)
export const postLaptop =(laptop)=>axios.post(API_URL,laptop)
export const putLaptop =(id)=>axios.put(API_URL+`/${id}`)
  
  

