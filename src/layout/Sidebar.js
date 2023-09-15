/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { MDBBtn } from "mdb-react-ui-kit";

function SideBar({ marginfn }) {
  const [collapsed, setCollapsed] = useState(false);
  if (!collapsed) {
    marginfn("275px");
  } else {
    marginfn("100px");
  }
  return (
    <div className="sidebar_div me-1" style={{}}>
      <Sidebar className="sidebar" collapsed={collapsed}>
        <Menu className="menu">
          <MenuItem>
            <MDBBtn
              size="md"
              floating
              style={{ backgroundColor: "#ac2bac", fontSize: "22px" }}
              href="#"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <MdKeyboardDoubleArrowRight />
              ) : (
                <MdKeyboardDoubleArrowLeft />
              )}
            </MDBBtn>
          </MenuItem>
          <MenuItem>Documentation</MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
