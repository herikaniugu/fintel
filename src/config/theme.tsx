import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#004080',
            paper: '#004080'
        }
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: "#484848",
                    borderBottom: "1px solid #cccccc"
                },
            },
        },
    },
});

export default theme;