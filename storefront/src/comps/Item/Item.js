import React from 'react'
import {Button} from '@mui/material'
import "./Item.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Item = (props) => {
    const history = useNavigate()
    const {_id, item_name, item_description, item_brand, item_price, item_availability, item_image} = props.item;
    const deletion = async() => {
        await axios.delete(`http://localhost:5000/items/${_id}`).then(response=>response.data).then(() => history("/")).then(()=>history("/shop"))
    }
  return (
    <div className = "card">
        <img src={item_image} alt ={item_name}/>
        <article> {item_brand} </article>
        <p>{item_description}</p>
        <h3>${item_price}</h3>
        <Button LinkComponent={Link} to={`/shop/${_id}`} sx={{mt: 'auto'}}>Update</Button>
        <Button onClick={deletion} sx={{mt: 'auto'}}>Remove</Button>
    </div>
  )
}

export default Item