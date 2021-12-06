const {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_LINK,
    CHANGE_PASSWORD,
    CHANGE_PHONE_NUMBER,
    CHANGE_EMAIL,
    FACEBOOK_LOGIN,
    GOOGLE_RECAPTCHA,
    GOOGLE_LOGIN,
  } = require("../actionTypes");
  
  const initialState = {
    user: null,
    error: null,
  };
  const userReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
      case REGISTER_USER:
        if (payload.error) {
          return { ...state, error: payload };
        } else {
          return { ...state, user: payload };
        }
      case LOGIN_USER:
        if (payload.error) {
          return { ...state, error: payload };
        } else {
          localStorage.setItem("user", JSON.stringify(payload));
          return { ...state, user: payload };
        }
      case FORGOT_PASSWORD_LINK:
        if (payload.error) {
          return { ...state, error: payload };
        } else return { ...state, user: payload };
      case FACEBOOK_LOGIN:
        if (payload.error) {
          return { ...state, error: payload };
        } else {
          localStorage.setItem("user", JSON.stringify(payload));
          return { ...state, user: payload };
        }
        case GOOGLE_LOGIN:
          if (payload.error) {
            return { ...state, error: payload };
          } else {
            localStorage.setItem("user", JSON.stringify(payload));
            return { ...state, user: payload };
          }
      case CHANGE_PASSWORD:
        if (payload.error) {
          return { ...state, error: payload };
        } else return { ...state, user: payload };
      case CHANGE_PHONE_NUMBER:
        if (payload.error) {
          return { ...state, error: payload };
        } else return { ...state, user: payload };
      case CHANGE_EMAIL:
        if (payload.error) {
          return { ...state, error: payload };
        } else return { ...state, user: payload };
      case FORGOT_PASSWORD:
        if (payload.error) {
          return { ...state, error: payload };
        } else return { ...state, user: payload };
      case GOOGLE_RECAPTCHA:
        if (payload.error) {
          return { ...state, error: payload };
        } else return { ...state, user: payload };
      case LOGOUT_USER:
        localStorage.removeItem("user");
        return { ...state, user: null };
      default:
        return state;
    }
  };
  export default userReducer;
  