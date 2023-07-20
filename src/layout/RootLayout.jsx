import { Outlet, NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link, useLocation } from "react-router-dom";
import './style.css'
export default function RootLayout() {
    const location = useLocation();
  return (
    <>
        <div className="header-bar" style={{display:"flex",justifyContent:"space-evenly",padding:"1rem"}}>
            <a href="">About</a>
            <a href="">contact</a>
            <a href="">help</a>
        </div>
    <div className="root-layout" style={{display:"flex"}}>
      <header>
       <Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem  active={location.pathname === "/"} className="sidenav-item" component={<Link to="/" />}> Home</MenuItem>
    <MenuItem active={location.pathname === "/about"} className="sidenav-item" component={<Link to="/about" />}> About</MenuItem>
    <MenuItem component={<Link to="/help" />}> Help</MenuItem>
  </Menu>
</Sidebar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </>

  )
}
