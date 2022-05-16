import { FormLabel, TextField, Box, Button, FormControlLabel, Checkbox } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Add_Item = () => {
  const history = useNavigate;
  const [inputs,SetInputs] = useState({
      item_name: "",
      item_description:"",
      item_brand:"",
      item_price:"",
      item_image:""
  });
  const [check, setCheck] = useState(false);
  const handleChange = (event) => {
      SetInputs((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value
      }))
  };

  const Request = async() => {
      await axios.post("http://localhost:5000/items", {
      item_name: String(inputs.item_name),
      item_description: String(inputs.item_description),
      item_brand: String(inputs.item_brand),
      item_price: Number(inputs.item_price),
      item_image:String(inputs.item_image),
      item_availability: Boolean(check)
  }).then(response=>response.data);
  };

  const Submission = (event) => {
      event.preventDefault();
      console.log(inputs, check);
      Request().then(()=>history('/shop'))
  };
  return <form onSubmit={Submission}>
      <Box 
      display= "flex" 
      flexDirection= "column" 
      justifyContent={"center"} 
      maxWidth={700} 
      alignContent={"center"} 
      alignSelf = "center" 
      marginLeft={"auto"} 
      marginRight={"auto"} 
      marginTop={10}>
      <FormLabel>Item Name</FormLabel>
      <TextField value = {inputs.item_name} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name="item_name"/>
      <FormLabel>Item Description</FormLabel>
      <TextField value = {inputs.item_description} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name="item_description"/>
      <FormLabel>Item Brand</FormLabel>
      <TextField value = {inputs.item_brand} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name="item_brand" />
      <FormLabel>Item Price</FormLabel>
      <TextField value = {inputs.item_price} onChange={handleChange} type = "number" margin = "normal" fullWidth variant = "outlined" name="item_price" />
      <FormLabel>Item Image</FormLabel>
      <TextField value = {inputs.item_image} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name="item_image" />
      <FormControlLabel control={<Checkbox checked={check} onChange={()=>setCheck(!check)}/>} label="Available"/>
      <Button sx = {{backgroundColor: '#ECBDC4'}} variant = 'contained' type='submit'>Add Item</Button>
      </Box>
  </form>
};

export default Add_Item