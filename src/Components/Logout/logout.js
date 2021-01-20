import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./logout.module.css";
import {
  logoutActionCreator,
  loginFetch,
} from "../../Redux/actions/logoutAction";

const Logout = memo((props) => {
  const dispatch = useDispatch();
  const [formDatas, setFormDatas] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    dispatch(logoutActionCreator(false));
  }, []);

  const handleOnchange = (event) => {
    const { name, value } = event.target || {};
    setFormDatas((s) => ({
      ...s,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    dispatch(loginFetch(formDatas));
    event.preventDefault();
  };

  return (
    <div className={styles.logoutMain}>
      <form onSubmit={handleOnSubmit}>
        <label></label>
        <input type="text" name="username" onChange={handleOnchange} />
        <br />
        <input type="password" name="password" onChange={handleOnchange} />
        <br />
        <button type="submit">submit</button>
      </form>
      {/* <div onClick={handleOnSubmit}></div> */}
    </div>
  );
});

export default Logout;
