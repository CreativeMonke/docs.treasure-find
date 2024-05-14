import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Box, useTheme } from "@mui/joy";
import "./markdown.css";
import "github-markdown-css";
import i18n from "i18next";

function MarkdownRenderer({ path }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const opacityAmmount = isDarkMode
    ? "0.95"
    : "0.85";
  const [markdownContent, setMarkdownContent] = useState("");
  const userLanguage = i18n.language || window.navigator.language;
  const language = userLanguage.split("-")[0];
  useEffect(() => {
    fetch(`/Docs/${language}/${path}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Markdown content");
        }
        return response.text();
      })
      .then((text) => {
        setMarkdownContent(text);
      })
      .catch((error) => {
        console.error("Error fetching Markdown content:", error);
      });
  }, []);
  return (
    <Box
      sx={{
        overflow: "auto",
        borderRadius: 10,
        opacity: `${opacityAmmount}`,
      }}
    >
      <ReactMarkdown
        className="markdown-body md-docs ${useTheme().palette.colorScheme === 'light' ? 'md-docs-light' : 'md-docs-dark'}"
        remarkPlugins={[remarkGfm, rehypeHighlight]}
        children={markdownContent}
      />
    </Box>
  );
}

export default MarkdownRenderer;
