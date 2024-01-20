import { Tabs, Tab } from "react-bootstrap";
import { FaWallet, FaMapPin, FaBell, FaCog } from "react-icons/fa";
import Colors from "../../constants/app-colors.contants";
import React from "react";

function HomeTabs() {
  const activeIconColor = Colors.gray; // Color for active state
  const inactiveIconColor = Colors.gray_medium; // Color for inactive state

  const getColoredIcon = (icon, isActive) => {
    const iconColor = isActive ? activeIconColor : inactiveIconColor;
    return React.cloneElement(icon, { color: iconColor });
  };

  return (
    <Tabs className="p-4 d-flex justify-content-between">
      <Tab
        eventKey="wallet"
        title={getColoredIcon(<FaWallet size={30} />, true)}
      ></Tab>

      <Tab
        eventKey="maps"
        title={getColoredIcon(<FaMapPin size={30} />, false)}
      ></Tab>

      <Tab
        eventKey="notifications"
        title={getColoredIcon(<FaBell size={30} />, false)}
      ></Tab>

      <Tab
        eventKey="settings"
        title={getColoredIcon(<FaCog size={30} />, false)}
      ></Tab>
    </Tabs>
  );
}

export default HomeTabs;
