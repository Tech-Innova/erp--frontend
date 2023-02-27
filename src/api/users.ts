import {
  TUserAuthModel,
  TUserLoginRequest,
  TUserSetPrivilegeRequest,
  TUserSetVerificationRequest,
  TUserSignupRequest,
} from "@super_raptor911/erp-types";
import { useMainStore } from "../store";
import { postRequest, getJson, getRequest } from "./request";

const server: string = import.meta.env.VITE_API_SERVER;

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
    const data = await getJson(res);
    useMainStore.getState().setJwtToken(data.token);

    return data.user as TUserAuthModel;
  } catch (error) {
    console.error("users::api_loginUser ", error);
    alert(error);
    return null;
  }
};

export const api_listUsers = async () => {
  try {
    const jwt_token = useMainStore.getState().jwtToken;
    console.log("token = ", jwt_token);
    const res = await getRequest(server + "user/list", jwt_token);
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }
    return (await getJson(res)) as TUserAuthModel[];
  } catch (error) {
    console.error("users::api_loginUser ", error);
    alert(error);
    throw error;
  }
};

export const api_modifyUserVerificationStatus = async (
  req: TUserSetVerificationRequest
) => {
  try {
    const jwt_token = useMainStore.getState().jwtToken;
    const res = await postRequest(
      server + "user/modify_verification",
      req,
      jwt_token
    );
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }
    return true;
  } catch (error) {
    console.error("users::api_modifyUserVerificationStatus ", error);
    alert(error);
    throw error;
  }
};

export const api_modifyUserPrivilege = async (
  req: TUserSetPrivilegeRequest
) => {
  try {
    const jwt_token = useMainStore.getState().jwtToken;
    const res = await postRequest(
      server + "user/modify_privilage",
      req,
      jwt_token
    );
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }
    return true;
  } catch (error) {
    console.error("users::api_modifyUserVerificationStatus ", error);
    alert(error);
    throw error;
  }
};
