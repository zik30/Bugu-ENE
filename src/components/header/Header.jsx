import React, { useState } from "react";
import stl from "./header.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer } from "antd";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={stl.header}>
      <div className={stl.headerContainer}>
        <div className={stl.logo}>
          <p id={stl.left}>БУГУ ЭНЕ</p>
          <img style={{ height: 57, objectFit: "contain" }} 
            src="../../../public/logo/logoWhite.png"
            alt="Bugu Ene logo samin"
          />
          <p>BUGU ENE</p>
        </div>
        <div className={stl.menu}>
          <Button onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer title="Pages" onClose={onClose} open={open}>
            <div className={stl.drawer_pages}>
              <Link to="/">Main Page</Link>
              <Divider />
              <Link to="/products">Our Products</Link>
              <Divider />
              <Link to="/aboutUs">About Us</Link>
              <Divider />
              <Link to="/contacts">Our Contacts</Link>
              <Divider />
              <Button type="primary">Заказать</Button>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Header;
