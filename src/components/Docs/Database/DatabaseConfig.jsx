import { Box } from '@mui/joy';
import React from 'react';
import MarkdownRenderer from '../MarkdownRenderer';
function DatabaseConfig() {
    return (
        <Box sx = {{
            overflow : "auto",
            borderRadius : 10,
        }}>
            <MarkdownRenderer path = "Database/database-config.md"/>
        </Box>
    );
};

export default DatabaseConfig;
