import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { Box, useTheme } from "@mui/joy";
import "./markdown.css";
import "github-markdown-css";
import i18n from "i18next";
import axios from "axios";

function MarkdownRenderer({ path }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const opacityAmmount = isDarkMode ? "0.95" : "0.85";
  const [markdownContent, setMarkdownContent] = useState("");
  const userLanguage = i18n.language || window.navigator.language;
  const language = userLanguage.split("-")[0];
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/Docs/${language}/${path}`);
        if (!response.data) {
          throw new Error("Failed to fetch Markdown content");
        }
        setMarkdownContent(response.data);
      } catch (error) {
        console.error("Error fetching Markdown content:", error);
      }
    }

    fetchData();
  }, [language, path]);

  return (
    <Box
      sx={{
        overflow: "auto",
        borderRadius: 10,
        opacity: `${opacityAmmount}`,
      }}
    >
      <div className="markdown-body md-docs">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          children={markdownContent}
        />
      </div>
    </Box>
  );
}

export default MarkdownRenderer;
