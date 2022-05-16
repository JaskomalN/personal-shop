import React, { useState } from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import {NavLink} from 'react-router-dom'
const Header = () => {
    const [value,setValue] = useState();
  return <div>
      <AppBar sx = {{backgroundColor: '#ECBDC4'}}position= 'sticky'>
          <Toolbar>
          <Typography><CheckroomIcon /></Typography>
          <Tabs sx={{ml : 'auto'}}textColor= 'inherit' indicatorColor='#69A583' value = {value} onChange = {(e, val) =>setValue(val)}>
              <Tab LinkComponent={NavLink} to="/add" label= 'Add an Item'/>
              <Tab LinkComponent={NavLink} to="/about" label= 'About'/>
              <Tab LinkComponent={NavLink} to="/shop" label= 'Shop'/>
          </Tabs>
          </Toolbar>
      </AppBar>
    </div>;
};

export default Header;