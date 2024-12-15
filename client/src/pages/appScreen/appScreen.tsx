import { Typography } from "@mui/material";
import AppProfile from "../../components/profile";

const AppScreenPage = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center",marginTop:'5rem' }}>
        <Typography variant="h5" sx={{fontWeight:'bold'}}>Application Details</Typography>
        <Typography variant="body2" sx={{padding:'10px'}}>Welcome to our app!</Typography>
        <AppProfile />
      </div>

    </>
  )
}

export default AppScreenPage