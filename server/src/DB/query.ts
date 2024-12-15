import { executeQuery, sql } from "./config";

export const addingToAuditDB = async (activity: string) => {
  const addQuery = async () => {
    const result = await sql`
        INSERT INTO public.auditlogs (activity)
        VALUES (${activity})
        RETURNING id`;
    return result;
  };
  const response = await executeQuery(addQuery);
  return response;
};

export const getAuditDetailsDB = async () => {
  const getDetails = async () => {
    const result = await sql`
       SELECT * FROM public.auditlogs ORDER BY time ASC;
        `;
    return result;
  };
  const response = await executeQuery(getDetails)
  console.log(response,'response is this');
  return response
};
