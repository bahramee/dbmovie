import { Box, colors, LinearProgress, Stack } from '@mui/material';

export default function LoadingWidget() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="60vh"
            minWidth={100}
        >
            <LinearProgress style={{ width: 100 }} />
        </Box>
    );
}