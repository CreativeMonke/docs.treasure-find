import { Box } from "@mui/joy";
import React from "react";
import MarkdownRenderer from "../MarkdownRenderer";
function ConfigurationGuide() {
  return (
    <Box
      sx={{
        overflow: "auto",
        borderRadius: 10,
      }}
    >
      <MarkdownRenderer path="Configuration/configuration-guide.md" />
    </Box>
  );
}

export default ConfigurationGuide;
