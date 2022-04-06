import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import CSVLogo from '../../assets/logo-csv.svg';

const Footer = () => {
    return (
        <footer>
            <Box bgcolor="white" color="black" sx={{ boxShadow: 1 }}>
                <Toolbar variant="dense">
                    <Stack direction="row" width="100%" spacing={2} justifyContent="space-between">
                        <div>
                            <img width="100" src={CSVLogo} alt="Cognizant Softvisin" />
                        </div>
                        <div>
                            <Typography variant="span" color="inherit" component="div">
                            CodeRun 2022 - Team Name
                            </Typography>
                        </div>
                    </Stack>
                </Toolbar>
            </Box>
        </footer>
    )
}

export default Footer;