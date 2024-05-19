import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark , coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
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
          children={markdownContent}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={isDarkMode ? coldarkDark : coldarkCold}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </Box>
  );
}

export default MarkdownRenderer;
