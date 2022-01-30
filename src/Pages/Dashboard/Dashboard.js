import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrder from '../MyOrder/MyOrder';
import { Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Review from '../Review/Review';
import Paybill from '../PayBill/Paybill';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../Hooks/useAuth';
import AddedService from '../AddedService/AddedService';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const drawerWidth = 170;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let {path, url} = useRouteMatch();
  const {contexts} = useAuth()
  const {admin} = contexts 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Nav.Link className='ps-5'>
                    <Link style={{color:'black', textDecoration:'none'}} to='/home'>Home</Link>
      </Nav.Link>
      <Divider/>
      <Nav.Link className='ps-5'>
                    <Link style={{color:'black', textDecoration:'none'}} to='/ourservices'>Explore</Link> 
      </Nav.Link>
      <Nav.Link className='ps-5'>
                    <Link style={{color:'black', textDecoration:'none'}} to={`${url}`}>Dashboard
                    </Link> 
      </Nav.Link>
      <Nav.Link className='ps-5'>
                    <Link style={{color:'black', textDecoration:'none'}} to={`${url}/review`}>Review
                    </Link> 
      </Nav.Link>
      <Nav.Link className='ps-5'>
                    <Link style={{color:'black', textDecoration:'none'}} to={`${url}/paybill`}>Paybill
                    </Link>
      </Nav.Link>
      <Divider/>
      { admin && <Box>
        <Nav.Link className='ps-5'>
                    <Link style={{color:'black', textDecoration:'none'}} to={`${url}/makeadmin`}>Make Admin
                    </Link>
      </Nav.Link>
        <Nav.Link className='ps-5'>
                    <Link style={{color:'black', textDecoration:'none'}} to={`${url}/addedservice`}>Add Item
                    </Link>
      </Nav.Link>
        <Nav.Link className='ps-5'>
                    <Link style={{color:'black', textDecoration:'none'}} to={`${url}/manageallorder`}>Manage All Orders
                    </Link>
      </Nav.Link>
        </Box>}
      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Men's Suits
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/paybill`}>
            <Paybill></Paybill>
        </Route>
        <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/addedservice`}>
            <AddedService></AddedService>
        </Route>
        <Route path={`${path}/manageallorder`}>
            <ManageAllOrder></ManageAllOrder>
        </Route>
      </Switch>


      </Box>
    </Box>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
