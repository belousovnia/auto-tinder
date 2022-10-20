export type SigninInputs = {
  email: string;
  password: string;
  confirmPwd: string;
};

export type SignupInputs = SigninInputs & {
  name: string;
};

export interface IAgreementData {
  title: string;
  text: string;
}

export interface AuthState {
  isAuth: boolean;
  isAuthCheked: boolean;
  isRegisted: boolean;
  isEmailConfirmed: boolean;
  isOnboarded: boolean;
  isReqSent: boolean;
  id: string;
  name: string | null;
  email: string;
  phone: string | null;
  isLoading: boolean;
  errorText: null | string;
}

export type UserRegistationResponse = {
  id: string;
  email: string;
  name: string;
};

export interface UserAuthResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    isOnboarded: boolean;
  };
}

export interface UserInfoResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
}