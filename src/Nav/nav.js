import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import navItems from "./navItems";
import style from "./nav.module.css";

const Nav = memo((props) => {
  const loginState = useSelector((state) => state.logoutReducer.loginState);
  let history = useHistory();

  useEffect(() => {
    if (loginState) history.push("/home");
  }, [loginState]);
  if (loginState)
    return (
      <nav>
        <ul className={style.nav}>
          {navItems.map(({ url, name }) => (
            <li key={url} className={style.navList}>
              <Link className={style.navLink} to={url}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  else {
    return null;
  }
});

export default Nav;
