 
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
     
        <li
          data-menu-toggle={layoutProps.menuDesktopToggle}
          aria-haspopup="true"
          className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive(
            "/custom"
          )}`}
        >
          <NavLink className="menu-link menu-toggle" to="/custom">
            <span className="menu-text">Custom</span>
            <i className="menu-arrow"></i>
          </NavLink>
          <div className="menu-submenu menu-submenu-classic menu-submenu-left">
            <ul className="menu-subnav">
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/e-commerce"
                )}`}
                data-menu-toggle="hover"
                aria-haspopup="true"
              >
                <NavLink className="menu-link menu-toggle" to="/e-commerce">
                  <span className="menu-text">eCommerce</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div
                  className={`menu-submenu menu-submenu-classic menu-submenu-right`}
                >
                  <ul className="menu-subnav">
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/e-commerce/customers"
                      )}`}
                    >
                      <NavLink className="menu-link" to="/e-commerce/customers">
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Customers</span>
                      </NavLink>
                    </li> 
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/e-commerce/products"
                      )}`}
                    >
                      <NavLink className="menu-link" to="/e-commerce/products">
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Products</span>
                      </NavLink>
                    </li> 
                  </ul>
                </div>
              </li>  
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
