import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);
  const filterItems = (category) => {
    if (category === "All") {
      setmenuData(Menu);
      return;
    }
    const updatedCategory = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedCategory);
  };
  return (
    <>
      <Navbar filterItems={filterItems} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
