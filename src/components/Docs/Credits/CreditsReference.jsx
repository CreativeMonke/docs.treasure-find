import { Box } from "@mui/joy";
import React from "react";
import MarkdownRenderer from "../MarkdownRenderer";
function Frameworks() {
  return (
    <Box
      sx={{
        overflow: "auto",
        borderRadius: 10,
      }}
    >
      <MarkdownRenderer path="Credits/frameworks-modules.md" />
    </Box>
  );
}
export function HosingServices() {
  return (
    <Box
      sx={{
        overflow: "auto",
        borderRadius: 10,
      }}
    >
      <MarkdownRenderer path="Credits/hosting-services.md" />
    </Box>
  );
}

export default Frameworks;
