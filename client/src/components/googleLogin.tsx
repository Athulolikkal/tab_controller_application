/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { IgoogleInfo, IgoogleLoginUserinfo } from '../type'
import { useNavigate } from 'react-router-dom'
import { toAuditlog } from '../Axios/apis/apis'
import { Button, CircularProgress } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const GoogleLoginComponent = () => {
    const google_client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    //validating and navigating to home page
    const validateUser = async (userDeatils: IgoogleLoginUserinfo) => {
        if (userDeatils) {
            await toAuditlog(`${userDeatils.email} login`)
            setLoading(false)
            navigate('/home')
        }
    }
    return (
        <>
            <LoginSocialGoogle
                client_id={google_client_id}
                scope='openid profile email'
                discoveryDocs='offline'
                onResolve={async ({ data }: IgoogleInfo) => {
                    setLoading(true)
                    const googleSingnUpinfo: any = await data
                    const details: IgoogleLoginUserinfo = {
                        name: googleSingnUpinfo?.name,
                        email: googleSingnUpinfo?.email,
                    }
                    await validateUser(details)
                }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 20px',
                        backgroundColor: '#4285F4',
                        '&:hover': {
                            backgroundColor: '#357AE8',
                        },
                        borderRadius: 2,
                    }}
                    disabled={loading}
                    onClick={()=>setLoading(true)}
                >
                    {loading ? (
                        <CircularProgress size={24} sx={{ color: 'white' }} />
                    ) : (
                        "Login via Google"
                    )}
                </Button>
            </LoginSocialGoogle>
        </>
    )
}

export default GoogleLoginComponent