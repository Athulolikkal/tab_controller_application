import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

interface IProps {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}
const SearchBar: React.FC<IProps> = ({ setSearchValue }) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 300, marginBottom: 2 }}>
            <TextField
                fullWidth
                variant="outlined"
                sx={{
                    marginBottom: '1rem',
                    height: '40px',
                    '& .MuiInputBase-root': {
                        height: '100%',
                    }
                }}
                InputProps={{
                    startAdornment: null, 
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </Box>
    );
};

export default SearchBar;
