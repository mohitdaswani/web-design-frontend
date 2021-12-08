import Axios from "axios";
import { GET_SUBSCRIBTION, RAZORPAY_SUCCESS } from "../actionTypes";
export const getSubscription = (data1) => async (dispatch, getState) => {
  try {
    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);
    const token = user.user.token;
    console.log(data1, token);
    const { data } = await Axios.post(
      `https://powerful-tor-09724.herokuapp.com/user/subscription`,
      data1,
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjBmNTRmOTk4OTRjMDAxNjkzZmVlYSIsImlhdCI6MTYzODk4NzEwNywiZXhwIjoxNjQxNTc5MTA3fQ.W1mHFWQe35JN_7Pki3KUqfh-FCu5IgIOmy_5esh98L0",
        },
      }
    );
    console.log(data);
    dispatch({ type: GET_SUBSCRIBTION, payload: data });
    return data;
  } catch (err) {
    // alert("invalid credentials");
    console.log(err);
  }
};
export const getPayment = (data1) => async (dispatch, getState) => {
  try {
    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);
    const token = user.user.token;
    const { data } = await Axios.post(
      `https://powerful-tor-09724.herokuapp.com/user/subscription`,
      data1,
      {
        headers: {
          Accept: "application/json",
          Authorization: token,
        },
      }
    );
    dispatch({ type: GET_SUBSCRIBTION, payload: data });
    return data;
  } catch (err) {
    // alert("invalid credentials");
    console.log(err);
  }
};
export const razorpaySuccess = (data1) => async (dispatch, getState) => {
  try {
    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);
    const token = user.user.token;
    const { data } = await Axios.post(
      `https://powerful-tor-09724.herokuapp.com/success`,
      data1,
      {
        headers: {
          Accept: "application/json",
          Authorization: token,
        },
      }
    );
    dispatch({ type: RAZORPAY_SUCCESS, payload: data });
    return data;
  } catch (err) {
    // alert("invalid credentials");
    console.log(err);
  }
};
