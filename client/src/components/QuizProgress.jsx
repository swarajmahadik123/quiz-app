import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

// Component to display the progress of the quiz
const QuizProgress = ({ progress, currentQuestionIndex, totalQuestions }) => {
  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ color: "grey.600" }}>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: "grey.100",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#1a73e8",
            borderRadius: 4,
          },
        }}
      />
    </Box>
  );
};

export default QuizProgress;
