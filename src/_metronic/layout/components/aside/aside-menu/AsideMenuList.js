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
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        
            
        <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/secteurs",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/secteurs">
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Money.svg")} />
                </span>
                <span className="menu-text">Gestion des prestataires | Suivi traitement des factures</span>
                <i className="menu-arrow" />
              </NavLink>
              <div className="menu-submenu ">
                <ul className="menu-subnav">
                  <ul className="menu-subnav">
                    <li
                      className="menu-item  menu-item-parent"
                      aria-haspopup="true"
                    >
                      <span className="menu-link">
                        <span className="menu-text">Gestion des prestataires</span>
                      </span>
                    </li>

                    {/*begin::2 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/secteurs-identification"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink className="menu-link" to="/secteurs-identification">
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Identification</span>
                      </NavLink>
                    </li>
                    {/*begin::2 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/secteurs-activite"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink className="menu-link" to="/secteurs-activite">
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Secteurs d'intervention</span>
                      </NavLink>
                    </li>
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/secteurs-prestations"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink className="menu-link" to="/secteurs-prestations">
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Prestataires</span>
                      </NavLink>
                    </li>
                    {/*end::2 Level*/}

                  </ul>
                </ul>
              </div>
            </li>
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
