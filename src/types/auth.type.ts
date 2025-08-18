export interface ISendOtp {
  email: string;
}

export interface IVerifyOtp extends ISendOtp {
  otp: string;
}

export interface ILogin {
  email: string;
  password: string;
}
