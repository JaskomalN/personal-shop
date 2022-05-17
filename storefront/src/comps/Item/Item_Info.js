import { Button, Checkbox, FormLabel, TextField, Box, FormControlLabel } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Item_Info = () => {
    const [inputs,setInputs] = useState({});
    const id = useParams().id;
    const [check,setCheck] = useState(false);
    const history = useNavigate;
    useEffect(() => {
        const fetchHandler = async() => {
            await axios.get(`http://localhost:5000/items/${id}`).then(response=>response.data).then(data=>setInputs(data.item));
        };
        fetchHandler();
     }, [id]);
     const Request = async() => {
         await axios.put(`http://localhost:5000/items/${id}`, { 
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
         Request().then(()=>history('/shop'));
     };
     const handleChange = (event) => {
        setInputs((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
     };
  return( <div>
     {inputs && ( <form onSubmit={Submission}>
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
      <Button sx = {{backgroundColor: '#ECBDC4'}} variant = 'contained' type='submit'>Update Item</Button>
      </Box>
  </form>)};
  </div>);
};

export default Item_Info