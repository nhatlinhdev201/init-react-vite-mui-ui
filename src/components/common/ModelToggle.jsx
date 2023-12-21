import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, useColorScheme } from '@mui/material';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';


export default function ModelToggle() {
    const { mode, setMode } = useColorScheme()

    const handleChange = (event) => {
        const modeSelected = event.target.value
        setMode(modeSelected)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                <InputLabel id="select-theme-label">Mode</InputLabel>
                <Select
                    labelId="select-theme-label"
                    id="select-theme"
                    value={mode}
                    label="Mode"
                    onChange={handleChange}
                >
                    <MenuItem value="light" >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            gap={3}
                        >
                            Light
                            <LightModeIcon/>
                        </Box>
                    </MenuItem>
                    <MenuItem value="dark">
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            gap={3}
                        >
                            Dark
                            <NightsStayIcon />
                        </Box>
                    </MenuItem>
                    <MenuItem value="system">
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            gap={3}
                        >
                            System
                            <DisplaySettingsIcon />
                        </Box>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
