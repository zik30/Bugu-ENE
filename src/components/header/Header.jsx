import React, { useState } from "react";
import stl from "./header.module.scss";
import { HomeFilled, InfoCircleFilled, MenuOutlined, PhoneFilled, ShoppingFilled } from "@ant-design/icons";
import { Button, Divider, Drawer } from "antd";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState('mainPage');
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const closed = (e) => {
    setOpen(false);
    setIsActive(e.target.innerText);
  };



  return (
    <div className={stl.header}>
      <div className={stl.headerContainer}>
        <div className={stl.logo}>
          <p id={stl.left}>БУГУ ЭНЕ</p>
          <img style={{ height: 57, objectFit: "contain" }} 
            src="/logo/logoWhite.png"
            alt="Bugu Ene logo samin"
          />
          <p>BUGU ENE</p>
        </div>
        <div className={stl.menu}>
          <Button onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer className={stl.drawer} style={{backgroundColor:"rgb(203 181 250)"}} title="Pages" onClose={closed} open={open}>
            <div className={stl.drawer_pages}>
              <Link style={isActive === 'Main Page' ? { textDecoration: 'underline' } : {}} onClick={closed} to="/"><HomeFilled />   Main Page</Link>
              <Divider />
              <Link style={isActive === 'Our Products' ? { textDecoration: 'underline' } : {}} onClick={closed} to="/products"><ShoppingFilled />   Our Products</Link>
              <Divider />
              <Link style={isActive === 'About Us' ? { textDecoration: 'underline' } : {}} onClick={closed} to="/aboutUs"><InfoCircleFilled />   About Us</Link>
              <Divider />
              <Link style={isActive === ' Our Contacts' ? { textDecoration: 'underline' } : {}} onClick={closed} to="/contacts"><PhoneFilled />   Our Contacts</Link>
              <Divider />
              <Button onClick={()=>setOpen(false)} type="primary">Заказать</Button>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Header;
