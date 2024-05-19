import { Box } from "@mui/joy";
import React from "react";
import MarkdownRenderer from "../MarkdownRenderer";
function ReposReference() {
  return (
    <Box
      sx={{
        overflow: "auto",
        borderRadius: 10,
      }}
    >
      <MarkdownRenderer path="Repos/repos.md" />
    </Box>
  );
}
export default ReposReference;
