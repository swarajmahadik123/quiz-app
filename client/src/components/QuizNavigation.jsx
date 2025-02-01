import React from "react";
import { Box, Button } from "@mui/material";

const QuizNavigation = ({
  onPrevious,
  onNext,
  isLastQuestion,
  allQuestionsAnswered,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 3,
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Button
        variant="outlined"
        onClick={onPrevious}
        sx={{
          flex: { xs: "1 0 100%", sm: "0 1 auto" },
          order: { xs: 2, sm: 1 },
          color: "text.secondary",
          borderColor: "divider",
          "&:hover": {
            borderColor: "primary.main",
            backgroundColor: "action.hover",
          },
        }}
      >
        Previous Question
      </Button>
      <Button
        variant="contained"
        onClick={onNext}
        disabled={isLastQuestion && !allQuestionsAnswered}
        sx={{
          flex: { xs: "1 0 100%", sm: "0 1 auto" },
          order: { xs: 1, sm: 2 },
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
          "&:disabled": {
            backgroundColor: "action.disabledBackground",
            color: "action.disabled",
          },
        }}
      >
        {isLastQuestion ? "Submit Quiz" : "Next Question"}
      </Button>
    </Box>
  );
};

export default QuizNavigation;
