import { toAuditlog } from "../Axios/apis/apis";

export const handleTabs = async (id: string) => {
  //if first tab is present
  const firstTab = await localStorage.getItem(`${id}_1`);
  if (firstTab) {
    await localStorage.setItem(`${id}_2`, id);
  } else {
    await localStorage.setItem(`${id}_1`, id);
  }
};

export const handleTabRemove = async (id: string,name:string) => {
  await toAuditlog(`back to home screen from ${name} application`)
  await localStorage.removeItem(`${id}_1`);
  await localStorage.removeItem(`${id}_2`);
};
