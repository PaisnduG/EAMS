import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGGIN_SUCCESS,
  LOGGIN_FAIL,
  LOGOUT,
} from "../action/type";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isAuthenticatedasAdmin: null,
  isAuthenticatedasUser: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticatedasUser: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticatedasUser: true,
        loading: false,
        user: payload,
      };
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticatedasAdmin: true,
        loading: false,
        user: payload,
      };
    case LOGGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAuthenticatedasAdmin: false,
        isAuthenticatedasUser: false,
        loading: false,
      };
    default:
      return state;
  }
}
