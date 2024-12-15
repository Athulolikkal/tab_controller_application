import React from 'react'
import { IApps } from '../type'
import { useNavigate } from 'react-router-dom'
import { handleTabs } from '../helpers/handleTabs'
import { Avatar, List,ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'

interface IProps {
    applist: IApps[]
}
const Applist: React.FC<IProps> = ({ applist }) => {
    const navigate = useNavigate()
    
    const navigateToProfile = async (appId: string, appName: string) => {
        await handleTabs(appId)
        navigate(`/app/${appId}`, { state: { id: appId, appname: appName } })
    }
    return (
        <>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {applist.map((app) => (
        <ListItem key={app.id} disablePadding>
          <ListItemButton onClick={() => navigateToProfile(app.id, app.app_name)}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>{app.app_name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={app.app_name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
        </>
    )
}

export default Applist