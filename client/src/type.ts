/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IApps {
  id: string;
  app_name: string;
}

export interface IgoogleInfo{
  provider: string,
  data: any,
}

export interface IgoogleLoginUserinfo{
  name: string;
  email:string;
}