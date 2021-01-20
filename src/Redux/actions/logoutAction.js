import { LOGIN_STATE } from "../constants";
import network from "./network";

const netWorkFunction = async ({ url, method, data }) => {
  const response = await network[method]({ url, data });
  return response;
};

const loginFetch = (data) => {
  return async (dispatch) => {
    const payload = await netWorkFunction({
      url: "http://localhost:3001/user",
      method: "post",
      data,
    });
    // const payload = await fetch('http://localhost:3001/user');
    // const result = await payload.json();
    dispatch({ type: "LOGIN_RESULT", payload: payload.data });
  };
};

const logoutActionCreator = (loginState) => ({
  type: LOGIN_STATE,
  loginState,
});

export { loginFetch, logoutActionCreator };
