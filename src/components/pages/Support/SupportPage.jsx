import { Box, Grid, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import supportQuestionsRo from "./SupportQuestionsRo.js";
import supportQuestionsEn from "./SupportQuestionsEn.js";
import i18n from "i18next";
function SupportPage(props) {
  const userLanguage = i18n.language || window.navigator.language;
  const language = userLanguage.split("-")[0];
  const [supportQuestions, setSupportQuestions] = useState(supportQuestionsRo);
  useEffect(() => {
    if (language === "ro") setSupportQuestions(supportQuestionsRo);
    else setSupportQuestions(supportQuestionsEn);
  }, [language, userLanguage, supportQuestions, setSupportQuestions]);

  return (
    <>
      <Grid
        container
        spacing={6} // Provides space between items
        rowGap={6}
        sx={{
          mt: 4,
          mr: 2,
          ml: 2,
          opacity: 1,
        }}
      >
        {supportQuestions.map((cardInfo, index) => (
          <Grid item lg={4} xs={12} sm={6} key={index}>
            <QuestionCard
              question={cardInfo.question}
              content={cardInfo.content}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          mt: 10, // Padding on the top and bottom
          textAlign: "center", // Center the text
          bottom: 1,
        }}
      >
        <Typography
          level="title-lg"
          sx={{
            mb: 4,
          }}
        >
          Realizat de Darabană Rares Cristian
        </Typography>
      </Box>
    </>
  );
}

export default SupportPage;
