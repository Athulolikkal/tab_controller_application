import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { handleTabRemove } from "../helpers/handleTabs";
import { toAuditlog } from "../Axios/apis/apis";
import { Typography, Card, CardContent } from '@mui/material'

const AppProfile = () => {

    const location = useLocation();
    const navigate = useNavigate();


    const { id, appname } = location.state || {};

    useEffect(() => {

        if (!id) return;

        alreadyOpen();

        const handleStorageEvent = (event: StorageEvent) => {
            if (event.key === "forceLogout" && event.newValue === `${id}_2`) {
                navigate("/home");
            }
        };

        const handleBackButton = async () => {
            await handleTabRemove(id, appname);
        };

        window.addEventListener("popstate", handleBackButton);
        window.addEventListener("storage", handleStorageEvent);

        return () => {
            localStorage.removeItem(`${id}_2`)
            localStorage.removeItem('forceLogout')
            window.removeEventListener("popstate", handleBackButton);
            window.removeEventListener("storage", handleStorageEvent);
        };
    }, [id, navigate]);

    const alreadyOpen = async () => {
        const openForFirstTime = localStorage.getItem(`${id}_1`);
        const isAlreadyOpen = localStorage.getItem(`${id}_2`);

        if (openForFirstTime && isAlreadyOpen) {
            await toAuditlog(`duplicate ${appname}-Application opening`)
            const userConfirmed = await window.confirm("You are already logged into another tab\n Do you want to log out the other tab?");
            if (userConfirmed) {
                await toAuditlog(`Existing ${appname} tab closed,new tab opened`)
                localStorage.setItem("forceLogout", `${id}_2`);
            } else {
                await toAuditlog(`keeping existing ${appname} tab open,new tab opened`)
                localStorage.removeItem(`${id}_2`)
                navigate("/home");
            }
        } else {
            await toAuditlog(`opening ${appname}`)
        }
    };

    return (
        <>
            <Card
                sx={{
                    maxWidth: 345,
                    margin: "16px auto",
                    boxShadow: 3,
                    padding: 2,
                    borderRadius: 2,
                }}
            >
                <CardContent>

                    {id && appname ? (
                        <div>
                            <Typography variant="body1" gutterBottom>
                                Id: <span style={{ fontWeight: 'bold' }}> {id}</span>
                            </Typography>
                            <Typography variant="body1">Name: <span style={{ fontWeight: 'bold' }}>{appname}</span></Typography>
                        </div>
                    ) : (
                        <Typography variant="body1" color="text.secondary">
                            No Details
                        </Typography>
                    )}
                </CardContent>
            </Card>

        </>
    );
};

export default AppProfile;
