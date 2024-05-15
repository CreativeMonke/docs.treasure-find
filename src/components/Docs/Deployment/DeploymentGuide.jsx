import { Box } from '@mui/joy';
import React from 'react';
import MarkdownRenderer from '../MarkdownRenderer';
function DeploymentGuide() {
    return (
        <Box sx = {{
            overflow : "auto",
            borderRadius : 10,
        }}>
            <MarkdownRenderer path = "Deployment/deployment-guide.md"/>
        </Box>
    );
};

export default DeploymentGuide;
