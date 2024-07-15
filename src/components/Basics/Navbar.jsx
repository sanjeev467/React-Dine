import React from "react";

const Navbar = ({ filterItems, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElm) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItems(curElm)}
              >
                {curElm}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
