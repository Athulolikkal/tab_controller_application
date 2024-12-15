/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApps } from "../../type";
import Axios from "../config";

export const getAllApps = async (searchValue: string): Promise<IApps[]> => {
  try {
    const getAllApplication = await Axios.get("/all-applications", {
      params: { search: searchValue },
    });
    return getAllApplication.data.payload || [];
  } catch (err: any) {
    console.log(err);
    return [];
  }
};

export const toAuditlog = async (activity: string) => {
  try {
    const addToAudit = await Axios.post("/add-audit-log", { activity });
    return addToAudit;
  } catch (err: any) {
    console.log(err);
    return false;
  }
};
export const getAuditlog = async () => {
  try {
    const getAuditDetails = await Axios.get("/audit-logs");
    return getAuditDetails.data.payload || [];
  } catch (err: any) {
    console.log(err);
    return [];
  }
};
