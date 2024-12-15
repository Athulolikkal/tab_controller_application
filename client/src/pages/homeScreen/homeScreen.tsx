
import { useEffect, useState } from "react"
import { IApps } from '../../type'
import Applist from "../../components/appList"
import { getAllApps } from "../../Axios/apis/apis"
import SearchBar from "../../components/searchBar"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';



const HomeScreenPage = () => {
  const navigate = useNavigate()
  //storing all apis
  const [applist, setApplist] = useState<IApps[]>([])
  //search value 
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const fetchApps = async () => {
      const allApps: IApps[] = await getAllApps(searchValue);
      setApplist(allApps);
    };
    fetchApps();
  }, [searchValue])
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <Button
          endIcon={<KeyboardArrowRight />}
          sx={{
            backgroundColor: '#3268a8',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: '#204878',
            },
          }}
          onClick={()=>navigate('/audit-log')}
        >
          Go to Audit logs
        </Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        <h3>All Applications</h3>
        <SearchBar setSearchValue={setSearchValue} />
        <Applist applist={applist} />
      </div>
    </>
  )
}

export default HomeScreenPage