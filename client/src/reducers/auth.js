import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  ADMIN_LOADED,
  EMPLOYEE_LOADED,
  CLIENT_LOADED,
  AUTH_ERROR,
  LOGGIN_SUCCESS,
  LOGGIN_FAIL,
  LOGOUT,
} from '../action/type';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isAdmin: false,
  isEmployee: false,
  isClient: false,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: true,
        loading: false,
        user: payload,
      };
    case CLIENT_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isClient: true,
        loading: false,
        user: payload,
      };
    case EMPLOYEE_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isEmployee: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case LOGGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
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
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAdmin: false,
        isEmployee: false,
        isClient: false,
        loading: false,
      };
    default:
      return state;
  }
}
