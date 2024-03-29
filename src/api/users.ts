import {
  T2fa,
  TUserAuthModel,
  TUserLoginRequest,
  TUserOauthRequest,
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

export const api_getGoogleUserDetails = async (accessToken: string) => {
  try {
    const res = await getRequest(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
      accessToken
    );

    if (res.status !== 200) throw "FAILED_TO_GET_GOOGLE_USER_DETAILS";

    const userDetails = await getJson(res);
    return userDetails;
  } catch (error) {
    console.error("users::api_modifyUserVerificationStatus ", error);
    alert(error);
    throw error;
  }
};

export const api_signupUserOauth = async (userInfo: TUserOauthRequest) => {
  try {
    const res = await postRequest(server + "user/signup_oauth", userInfo);
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }

    return true;
  } catch (error) {
    console.error("users::api_signupUserOauth ", error);
    alert(error);
  }
  return false;
};

export const api_loginUserOauth = async (userInfo: TUserOauthRequest) => {
  try {
    const res = await postRequest(server + "user/login_oauth", userInfo);
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

export const api_save2fa = async (uid: number) => {
  try {
    const jwt_token = useMainStore.getState().jwtToken;
    const res = await postRequest(
      server + "user/create_2fa",
      { uid },
      jwt_token
    );
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }
  } catch (error) {
    console.error("users::api_loginUser ", error);
    alert(error);
  }
};

export const api_get2fa = async (uid: number) => {
  try {
    const jwt_token = useMainStore.getState().jwtToken;
    const res = await postRequest(
      server + "user/get_2fa",
      { user_id: uid },
      jwt_token
    );
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }
    const data = await getJson(res);
    return data as T2fa;
  } catch (error) {
    console.error("users::api_loginUser ", error);
    return null;
  }
};

export const api_verify2fa = async (uid: number, otp: number) => {
  try {
    const jwt_token = useMainStore.getState().jwtToken;
    const res = await postRequest(
      server + "user/verify_2fa",
      { user_id: uid, otp },
      jwt_token
    );
    if (res.status != 200) {
      throw (await getJson(res)).message;
    }
    const data = await getJson(res);
    return data.verified as boolean;
  } catch (error) {
    console.error("users::api_loginUser ", error);
    return null;
  }
};
