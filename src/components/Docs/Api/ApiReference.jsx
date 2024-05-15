import { Box } from "@mui/joy";
import React from "react";
import MarkdownRenderer from "../MarkdownRenderer";
function EndpointsReference() {
  return (
    <Box
      sx={{
        overflow: "auto",
        borderRadius: 10,
      }}
    >
      <MarkdownRenderer path="Api/endpoints-reference.md" />
    </Box>
  );
}

export default EndpointsReference;
