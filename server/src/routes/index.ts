import { Router } from "express";
import {
  getAllApplication,
  addToAuditLog,
} from "../controller/applicationController";
import { getAuditLogDetails } from "../controller/auditLogController";
const router = Router();

//all application list
router.get("/all-applications", getAllApplication);

//adding to audit log
router.post("/add-audit-log", addToAuditLog);

router.get("/audit-logs", getAuditLogDetails);

export default router;
