import * as types from "./AuthActionTypes";
import axios from "axios";


const getLoginreq = () => {
  return {
    type: types.LOGINUSERREQ,
  };
};

const getLoginsuccess = (payload:any) => {
  return {
    type: types.LOGINUSERSUCESS,
    payload,
  };
};

const geLoginfailure = () => {
  return {
    type: types.LOGINUSERFAILURE,
  };
};

// -------------

const getsignReq = () => {
  return {
    type: types.SIGNUPUSERREQ,
  };
};

const getsignSucess = (payload:any) => {
  return {
    type: types.SIGNUPUSERSUCESS,
    payload,
  };
};

const getsignFail = () => {
  return {
    type: types.SIGNUPUSERFAILURE,
  };
};


import { loginApi, userobj } from "./AuthApi";

import { Dispatch } from "redux";

export const Loginpost = () => async (payload:any)=> (dispatch: Dispatch) => {
     dispatch(getLoginreq())
      return axios.post('loginApi',payload)
       .then((r) => {
      return dispatch(getLoginsuccess(r.data));
    })
    .catch((err) => {
      return dispatch(geLoginfailure());
    });
};


export const getUsersData = () => async (dispatch: Dispatch) => {
  try {
    let response = await loginApi();

    dispatch({ type: GET_USERS_DATA, payload: response });
  } catch (error) {}
};

export const setCurrentUser = (userdata: userobj) => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_USER, payload: userdata });
};

export const makeUserLogout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT_USER });
};
export const updateUserCart = (total: number) => (dispatch: any) => {
  dispatch({ type: UPDATE_CART_TOTAL, payload: total });
};



// export const Loginpost = (payload) => (dispatch) => {
//   dispatch(getLoginreq());
//   return axios
//     .post(`https://doctorappoinment.onrender.com/login`, payload)
//     .then((r) => {
//       return dispatch(getLoginsuccess(r.data));
//     })
//     .catch((err) => {
//       return dispatch(geLoginfailure());
//     });
// };

// export const Signuppost = (payload) => (dispatch) => {
//   dispatch(getsignReq);
//   return axios
//     .post(`https://doctorappoinment.onrender.com/signup`, payload)
//     .then((r) => {
//       return dispatch(getsignSucess(r));
//     })
//     .catch((err) => {
//       dispatch(getsignFail());
//     });
// };

// export const handleLogOut = () => (dispatch) => {
//   dispatch({ type: types.LOGOUT_SUCCESS });
// };




 /************* auth Actions  *************** */
 