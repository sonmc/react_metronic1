/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <> 
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
         
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/e-commerce",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/e-commerce">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
            </span>
            <span className="menu-text">eCommerce</span>
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">eCommerce</span>
                </span>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/e-commerce/customers"
                )}`}
                aria-haspopup="true"
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
                aria-haspopup="true"
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

        <li
          className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/user-profile">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Add-user.svg"
                )}
              />
            </span>
            <span className="menu-text">User Profile</span>
          </NavLink>
        </li> 
      </ul>

    </>
  );
}
