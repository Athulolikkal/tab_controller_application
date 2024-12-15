import { Request, Response } from "express";
import { allApplicationPayload } from "../utils/customPayload";
import { addingToAuditDB } from "../DB/query";

export function getAllApplication(req: any, res: any) {
  try {
    const { search } = req.query;
    const filteredApps = search
    ? allApplicationPayload.filter((app) =>
        app.app_name.toLowerCase().includes((search as string).toLowerCase()) 
      )
    : allApplicationPayload;
    return res.status(200).json({ payload: filteredApps });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
}

export async function addToAuditLog(req: any, res: any) {
  try {
    if (req?.body?.activity) {
      const addToAudit = await addingToAuditDB(req?.body?.activity);
      if (!addToAudit.error) {
        return res.status(201).json({ message: "recorded successfully" });
      }
    }
    return res.status(400).json({ message: "failed record the log" });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
}
