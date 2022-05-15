import React from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
const Header = () => {
  return <div>
      <AppBar position= 'sticky'>
          <Toolbar>
          <Typography><CheckroomIcon /></Typography>
          <Tabs>
              <Tab label= 'Add an Item'/>
              <Tab label= 'About'/>
          </Tabs>
          </Toolbar>
      </AppBar>
    </div>;
};

export default Header;