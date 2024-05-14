import { Box } from '@mui/joy';
import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '../MarkdownRenderer';
const DeploymentGuide = () => {
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
