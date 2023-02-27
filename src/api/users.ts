import {
  TUserLoginRequest,
  TUserSignupRequest,
} from "@super_raptor911/erp-types";
import { postRequest, getJson } from "./request";

const server: string = import.meta.env.VITE_API_SERVER;
console.log("server", server);
//
export const api_signupUser = async (userInfo: TUserSignupRequest) => {
  try {
    const res = await postRequest(server + "user/signup", userInfo);
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }

    return true;
  } catch (error) {
    console.error("users::api_signupUser ", error);
    alert(error);
  }
  return false;
};

export const api_loginUser = async (userInfo: TUserLoginRequest) => {
  try {
    const res = await postRequest(server + "user/login", userInfo);
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }

    return true;
  } catch (error) {
    console.error("users::api_loginUser ", error);
    alert(error);
  }
  return false;
};
