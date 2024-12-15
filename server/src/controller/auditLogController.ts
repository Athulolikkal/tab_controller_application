import { getAuditDetailsDB } from "../DB/query";

export async function getAuditLogDetails(req: any, res: any) {
  try {
    const allAuditLogs = await getAuditDetailsDB();
    if (allAuditLogs && allAuditLogs.length > 0) {
      return res.status(200).json({ payload: allAuditLogs });
    }
    return res.status(400).json({ payload: [] });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
}
